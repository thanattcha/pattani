var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ขอบเขต'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: 'ประเภทสถานที่ท่องเที่ยว<br />\
    <img src="styles/legend/_2_0.png" /> ตลาด<br />\
    <img src="styles/legend/_2_1.png" /> ทั่วไป<br />\
    <img src="styles/legend/_2_2.png" /> ธรรมชาติ<br />\
    <img src="styles/legend/_2_3.png" /> ประวัติศาสตร์<br />\
    <img src="styles/legend/_2_4.png" /> ศาสนา<br />\
    <img src="styles/legend/_2_5.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_Positron_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'ap_code': 'ap_code', 'ap_tn': 'ap_tn', 'ap_en': 'ap_en', 'pv_code': 'pv_code', 'pv_tn': 'pv_tn', 'pv_en': 'pv_en', 're_nesdb': 're_nesdb', 're_royin': 're_royin', 'admin_type': 'admin_type', });
lyr__2.set('fieldAliases', {'สถานที่': 'สถานที่', 'lat': 'lat', 'long': 'long', ')': ')', });
lyr__1.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'ap_code': 'TextEdit', 'ap_tn': 'TextEdit', 'ap_en': 'TextEdit', 'pv_code': 'TextEdit', 'pv_tn': 'TextEdit', 'pv_en': 'TextEdit', 're_nesdb': 'TextEdit', 're_royin': 'TextEdit', 'admin_type': 'TextEdit', });
lyr__2.set('fieldImages', {'สถานที่': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', ')': 'TextEdit', });
lyr__1.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'ap_code': 'no label', 'ap_tn': 'no label', 'ap_en': 'no label', 'pv_code': 'no label', 'pv_tn': 'no label', 'pv_en': 'no label', 're_nesdb': 'no label', 're_royin': 'no label', 'admin_type': 'no label', });
lyr__2.set('fieldLabels', {'สถานที่': 'no label', 'lat': 'no label', 'long': 'no label', ')': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});