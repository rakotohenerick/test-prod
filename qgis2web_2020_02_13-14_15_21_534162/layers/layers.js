var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geopackagetest_1 = new ol.format.GeoJSON();
var features_geopackagetest_1 = format_geopackagetest_1.readFeatures(json_geopackagetest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geopackagetest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geopackagetest_1.addFeatures(features_geopackagetest_1);cluster_geopackagetest_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_geopackagetest_1
});
var lyr_geopackagetest_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_geopackagetest_1, 
                style: style_geopackagetest_1,
                interactive: true,
                title: '<img src="styles/legend/geopackagetest_1.png" /> geopackagetest'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_geopackagetest_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_geopackagetest_1];
lyr_geopackagetest_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'survey:date': 'survey:date', 'url': 'url', 'was:cuisine': 'was:cuisine', 'was:name': 'was:name', 'capacity': 'capacity', 'cuisine': 'cuisine', 'delivery': 'delivery', 'outdoor_seating': 'outdoor_seating', 'smoking': 'smoking', 'step_count': 'step_count', 'takeaway': 'takeaway', 'wheelchair': 'wheelchair', 'festival': 'festival', 'festival:Avignon_Off:2015': 'festival:Avignon_Off:2015', 'old_name': 'old_name', 'opening_hours': 'opening_hours', 'phone': 'phone', 'website': 'website', 'old_name_1': 'old_name_1', 'name:oc': 'name:oc', 'source:name:oc': 'source:name:oc', 'toilets:wheelchair': 'toilets:wheelchair', 'was:shop': 'was:shop', 'old_amenity': 'old_amenity', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'alt_name': 'alt_name', 'old_shop': 'old_shop', 'addr:city': 'addr:city', 'old_cuisine': 'old_cuisine', 'air_conditioned': 'air_conditioned', 'organic': 'organic', 'internet_access': 'internet_access', 'description': 'description', 'was:name_1': 'was:name_1', 'last_checked': 'last_checked', 'access': 'access', 'diet:vegan': 'diet:vegan', 'diet:vegetarian': 'diet:vegetarian', 'was:description': 'was:description', 'award:Gault-Millau:2013': 'award:Gault-Millau:2013', 'old_description': 'old_description', 'shop': 'shop', 'level': 'level', 'was:alt_name': 'was:alt_name', 'was:amenity': 'was:amenity', 'contact:phone': 'contact:phone', 'name:en': 'name:en', 'name:fr': 'name:fr', 'mapillary': 'mapillary', 'short_name': 'short_name', 'source:survey': 'source:survey', 'diet:gluten_free': 'diet:gluten_free', 'gluten_free': 'gluten_free', 'email': 'email', 'was:office': 'was:office', });
lyr_geopackagetest_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'name': '', 'survey:date': '', 'url': '', 'was:cuisine': '', 'was:name': '', 'capacity': '', 'cuisine': '', 'delivery': '', 'outdoor_seating': '', 'smoking': '', 'step_count': '', 'takeaway': '', 'wheelchair': '', 'festival': '', 'festival:Avignon_Off:2015': '', 'old_name': '', 'opening_hours': '', 'phone': '', 'website': '', 'old_name_1': '', 'name:oc': '', 'source:name:oc': '', 'toilets:wheelchair': '', 'was:shop': '', 'old_amenity': '', 'addr:housenumber': '', 'addr:postcode': '', 'addr:street': '', 'alt_name': '', 'old_shop': '', 'addr:city': '', 'old_cuisine': '', 'air_conditioned': '', 'organic': '', 'internet_access': '', 'description': '', 'was:name_1': '', 'last_checked': '', 'access': '', 'diet:vegan': '', 'diet:vegetarian': '', 'was:description': '', 'award:Gault-Millau:2013': '', 'old_description': '', 'shop': '', 'level': '', 'was:alt_name': '', 'was:amenity': '', 'contact:phone': '', 'name:en': '', 'name:fr': '', 'mapillary': '', 'short_name': '', 'source:survey': '', 'diet:gluten_free': '', 'gluten_free': '', 'email': '', 'was:office': '', });
lyr_geopackagetest_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'survey:date': 'no label', 'url': 'no label', 'was:cuisine': 'no label', 'was:name': 'no label', 'capacity': 'no label', 'cuisine': 'no label', 'delivery': 'no label', 'outdoor_seating': 'no label', 'smoking': 'no label', 'step_count': 'no label', 'takeaway': 'no label', 'wheelchair': 'no label', 'festival': 'no label', 'festival:Avignon_Off:2015': 'no label', 'old_name': 'no label', 'opening_hours': 'no label', 'phone': 'no label', 'website': 'no label', 'old_name_1': 'no label', 'name:oc': 'no label', 'source:name:oc': 'no label', 'toilets:wheelchair': 'no label', 'was:shop': 'no label', 'old_amenity': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'alt_name': 'no label', 'old_shop': 'no label', 'addr:city': 'no label', 'old_cuisine': 'no label', 'air_conditioned': 'no label', 'organic': 'no label', 'internet_access': 'no label', 'description': 'no label', 'was:name_1': 'no label', 'last_checked': 'no label', 'access': 'no label', 'diet:vegan': 'no label', 'diet:vegetarian': 'no label', 'was:description': 'no label', 'award:Gault-Millau:2013': 'no label', 'old_description': 'no label', 'shop': 'no label', 'level': 'no label', 'was:alt_name': 'no label', 'was:amenity': 'no label', 'contact:phone': 'no label', 'name:en': 'no label', 'name:fr': 'no label', 'mapillary': 'no label', 'short_name': 'no label', 'source:survey': 'no label', 'diet:gluten_free': 'no label', 'gluten_free': 'no label', 'email': 'no label', 'was:office': 'no label', });
lyr_geopackagetest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});