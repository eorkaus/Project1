var wms_layers = [];


        var lyr_VWorldStreet_0 = new ol.layer.Tile({
            'title': 'VWorld Street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png'
            })
        });
var lyr_WD1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "WD1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WD1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13958269.430346, 4032898.340999, 14061395.324182, 4206107.574447]
                            })
                        });
var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_2.addFeatures(features_Contours_2);
var lyr_Contours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_2, 
                style: style_Contours_2,
                interactive: true,
                title: '<img src="styles/legend/Contours_2.png" /> Contours'
            });
var format_KREDO7sites_3 = new ol.format.GeoJSON();
var features_KREDO7sites_3 = format_KREDO7sites_3.readFeatures(json_KREDO7sites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KREDO7sites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KREDO7sites_3.addFeatures(features_KREDO7sites_3);
var lyr_KREDO7sites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KREDO7sites_3, 
                style: style_KREDO7sites_3,
                interactive: true,
                title: '<img src="styles/legend/KREDO7sites_3.png" /> KREDO 7 sites'
            });

lyr_VWorldStreet_0.setVisible(true);lyr_WD1_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_KREDO7sites_3.setVisible(true);
var layersList = [lyr_VWorldStreet_0,lyr_WD1_1,lyr_Contours_2,lyr_KREDO7sites_3];
lyr_Contours_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_KREDO7sites_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Contours_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_KREDO7sites_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Contours_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_KREDO7sites_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KREDO7sites_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});