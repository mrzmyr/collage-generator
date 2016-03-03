class FileReaderHelper {
  // http://www.html5rocks.com/en/tutorials/file/dndfiles/
  getRawImageData (files) {
    var promises = [];

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      promises.push(new Promise(function (resolve, reject) {
        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            theFile.uri = e.target.result;
            resolve(theFile);
          };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
      }))
    }

    return Promise.all(promises);
  }
}

export default FileReaderHelper;
