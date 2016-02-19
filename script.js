function fillCollages(values) {
  var promises = [];

  $('body').addClass('max-size');

  $('.collage').each(function () {
    var id = $(this).attr('id');

    $(this).find(`[id^="${id}"]`).each(function (index) {
      if(values[index]) {
        $(this).css('background-image', `url(${values[index]})`)
      }
    })

    promises.push(html2canvas(this));
  })

  Promise
    .all(promises)
    .then(function (canvases) {
      $('.collage-container').each(function (index) {
        $(this).find(`.take-snapshot`).attr({
          href: canvases[index].toDataURL(),
          download: `${Math.floor(Math.random() * 1000000000)}.png`
        });
      });

      $('body').removeClass('max-size');
    })
}

function handleFile(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file, "UTF-8");

  return new Promise(function (resolve, reject) {
    reader.onload = function (e) {
      resolve(e.target.result)
    }

    reader.onerror = function (e) {
      reject(e)
    }
  })
}

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  var promises = [];

  for (var i = 0, f; f = files[i]; i++) {
    promises.push(handleFile(f));
  }

  Promise
    .all(promises)
    .then(function (values) {
      fillCollages(values);
    })
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
