var wms_layers = [];


        var lyr_osm_0 = new ol.layer.Tile({
            'title': 'osm',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CIPdatawaterbyDWITier_1 = new ol.format.GeoJSON();
var features_CIPdatawaterbyDWITier_1 = format_CIPdatawaterbyDWITier_1.readFeatures(json_CIPdatawaterbyDWITier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIPdatawaterbyDWITier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIPdatawaterbyDWITier_1.addFeatures(features_CIPdatawaterbyDWITier_1);
var lyr_CIPdatawaterbyDWITier_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIPdatawaterbyDWITier_1, 
                style: style_CIPdatawaterbyDWITier_1,
                popuplayertitle: 'CIP data(water) by DWI Tier',
                interactive: true,
    title: 'CIP data(water) by DWI Tier<br />\
    <img src="styles/legend/CIPdatawaterbyDWITier_1_0.png" /> Tier 1<br />\
    <img src="styles/legend/CIPdatawaterbyDWITier_1_1.png" /> Tier 2<br />\
    <img src="styles/legend/CIPdatawaterbyDWITier_1_2.png" /> Tier 3<br />\
    <img src="styles/legend/CIPdatawaterbyDWITier_1_3.png" /> <br />' });

lyr_osm_0.setVisible(true);lyr_CIPdatawaterbyDWITier_1.setVisible(true);
var layersList = [lyr_osm_0,lyr_CIPdatawaterbyDWITier_1];
lyr_CIPdatawaterbyDWITier_1.set('fieldAliases', {'fid': 'fid', 'TreatmentPlant': 'TreatmentPlant', 'SampleDateTime': 'SampleDateTime', 'SampleLocationName': 'SampleLocationName', 'SampleValue': 'SampleValue', 'NameDeterminandName': 'NameDeterminandName', 'UnitsName': 'UnitsName', 'BelowMinReading': 'BelowMinReading', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ug/l': 'ug/l', 'ng/l': 'ng/l', 'mg/l': 'mg/l', 'ug/kg': 'ug/kg', 'Tier': 'Tier', 'Project_Tier': 'Project_Tier', 'EQS_Tier': 'EQS_Tier', 'result_log_ug/l': 'result_log_ug/l', 'result': 'result', 'Year': 'Year', 'location_status': 'location_status', 'inferred_coordinates': 'inferred_coordinates', 'location_status_2': 'location_status_2', 'manual_coordinates': 'manual_coordinates', 'location_status_3': 'location_status_3', 'pfas_standardized': 'pfas_standardized', });
lyr_CIPdatawaterbyDWITier_1.set('fieldImages', {'fid': 'TextEdit', 'TreatmentPlant': 'TextEdit', 'SampleDateTime': 'TextEdit', 'SampleLocationName': 'TextEdit', 'SampleValue': 'TextEdit', 'NameDeterminandName': 'TextEdit', 'UnitsName': 'TextEdit', 'BelowMinReading': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ug/l': 'TextEdit', 'ng/l': 'TextEdit', 'mg/l': 'TextEdit', 'ug/kg': 'TextEdit', 'Tier': 'TextEdit', 'Project_Tier': 'TextEdit', 'EQS_Tier': 'TextEdit', 'result_log_ug/l': 'TextEdit', 'result': 'TextEdit', 'Year': 'TextEdit', 'location_status': 'TextEdit', 'inferred_coordinates': 'TextEdit', 'location_status_2': 'TextEdit', 'manual_coordinates': 'TextEdit', 'location_status_3': 'TextEdit', 'pfas_standardized': 'TextEdit', });
lyr_CIPdatawaterbyDWITier_1.set('fieldLabels', {'fid': 'inline label - always visible', 'TreatmentPlant': 'inline label - always visible', 'SampleDateTime': 'inline label - always visible', 'SampleLocationName': 'inline label - always visible', 'SampleValue': 'inline label - always visible', 'NameDeterminandName': 'inline label - always visible', 'UnitsName': 'inline label - always visible', 'BelowMinReading': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ug/l': 'inline label - always visible', 'ng/l': 'inline label - always visible', 'mg/l': 'inline label - always visible', 'ug/kg': 'inline label - always visible', 'Tier': 'inline label - always visible', 'Project_Tier': 'inline label - always visible', 'EQS_Tier': 'inline label - always visible', 'result_log_ug/l': 'inline label - always visible', 'result': 'inline label - always visible', 'Year': 'inline label - always visible', 'location_status': 'inline label - always visible', 'inferred_coordinates': 'inline label - always visible', 'location_status_2': 'inline label - always visible', 'manual_coordinates': 'inline label - always visible', 'location_status_3': 'inline label - always visible', 'pfas_standardized': 'inline label - always visible', });
lyr_CIPdatawaterbyDWITier_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});