I tried to get a map image from a wms server using the following code. 

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Playing with fis broker berlin</title>
    
      <link rel="stylesheet" href="../../libs/ol3/css/ol.css"/>
      <link rel="stylesheet" href="../../css/samples.css"/>
    
    </head>
    <body>
    <div id="map" class="map"></div>
    <script src="../../libs/ol3/js/ol.js"></script>
    
    <script>
    
      var imageSource = new ol.source.ImageWMS({
        url: 'http://fbinter.stadt-berlin.de/fb/wms/senstadt/k_dtk50',
        params: {
          'LAYERS': '0',
          'REQUEST': 'GetMap',
          'STYLES': ['default'],
          'SRS': 'EPSG:4326',
          'BBOX': [13.079, 52.3284, 13.7701, 52.6877],
          'WIDTH': '256',
          'HEIGT': '256',
          'FORMAT': 'jpeg'
        }
      })
    
      imageSource.on('imageloaderror', function (event) {
        var imageState = event.target.getState()
        var request = event.image.n
    
        console.log('imageloaderror, state = ' + imageState)
        console.log('request: ' + request)
      })
    
      var imageLayer = new ol.layer.Image({
        opacity: 0,
        source: imageSource
      })
    
      var view = new ol.View({
        center: [13.4297269, 52.4594867],
        zoom: 10
      })
    
      var map = new ol.Map({
        target: 'map',
        layers: [imageLayer],
        view: view
      })
    </script>
    
    </body>
    </html>
  
ol3 fails to show the image, because the wms sends backs a xml exception report instead of jpeg data meaning 
*crs is not permitted: EPSG:3857*. 
On the java console we see the message 
*Resource interpreted as Image but transferred with MIME type text/xml ...*

I understand, that the image source is not set up correctly. This needs further investigaton by me. But My question is: 
How can I catch the message  *crs is not permitted: EPSG:3857* and any other error messages from the wms server by the ol script program? 