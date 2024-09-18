var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });
var lyr_fulldisk_ch13_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes_east.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "fulldisk_ch13",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "fulldisk_ch13",
                            opacity: 0.615000,
                            
                            
                          });
              wms_layers.push([lyr_fulldisk_ch13_1, 1]);
var format_Archipelagic_Baseline_TNT_2 = new ol.format.GeoJSON();
var features_Archipelagic_Baseline_TNT_2 = format_Archipelagic_Baseline_TNT_2.readFeatures(json_Archipelagic_Baseline_TNT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archipelagic_Baseline_TNT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archipelagic_Baseline_TNT_2.addFeatures(features_Archipelagic_Baseline_TNT_2);
var lyr_Archipelagic_Baseline_TNT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Archipelagic_Baseline_TNT_2, 
                style: style_Archipelagic_Baseline_TNT_2,
                popuplayertitle: "Archipelagic_Baseline_TNT",
                interactive: false,
                title: '<img src="styles/legend/Archipelagic_Baseline_TNT_2.png" /> Archipelagic_Baseline_TNT'
            });
var format_ENTIRE_BAGO_3 = new ol.format.GeoJSON();
var features_ENTIRE_BAGO_3 = format_ENTIRE_BAGO_3.readFeatures(json_ENTIRE_BAGO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTIRE_BAGO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTIRE_BAGO_3.addFeatures(features_ENTIRE_BAGO_3);
var lyr_ENTIRE_BAGO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTIRE_BAGO_3, 
                style: style_ENTIRE_BAGO_3,
                popuplayertitle: "ENTIRE_BAGO",
                interactive: false,
                title: '<img src="styles/legend/ENTIRE_BAGO_3.png" /> ENTIRE_BAGO'
            });
var format_TDAD_EAST_SIDE_4 = new ol.format.GeoJSON();
var features_TDAD_EAST_SIDE_4 = format_TDAD_EAST_SIDE_4.readFeatures(json_TDAD_EAST_SIDE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_EAST_SIDE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_EAST_SIDE_4.addFeatures(features_TDAD_EAST_SIDE_4);
var lyr_TDAD_EAST_SIDE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_EAST_SIDE_4, 
                style: style_TDAD_EAST_SIDE_4,
                popuplayertitle: "TDAD_EAST_SIDE",
                interactive: false,
                title: '<img src="styles/legend/TDAD_EAST_SIDE_4.png" /> TDAD_EAST_SIDE'
            });
var format_TDAD_WEST_COAST_CONVERGENCE_5 = new ol.format.GeoJSON();
var features_TDAD_WEST_COAST_CONVERGENCE_5 = format_TDAD_WEST_COAST_CONVERGENCE_5.readFeatures(json_TDAD_WEST_COAST_CONVERGENCE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_WEST_COAST_CONVERGENCE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_WEST_COAST_CONVERGENCE_5.addFeatures(features_TDAD_WEST_COAST_CONVERGENCE_5);
var lyr_TDAD_WEST_COAST_CONVERGENCE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_WEST_COAST_CONVERGENCE_5, 
                style: style_TDAD_WEST_COAST_CONVERGENCE_5,
                popuplayertitle: "TDAD_WEST_COAST_CONVERGENCE",
                interactive: true,
                title: '<img src="styles/legend/TDAD_WEST_COAST_CONVERGENCE_5.png" /> TDAD_WEST_COAST_CONVERGENCE'
            });
var format_TDAD_WEST_SIDE_6 = new ol.format.GeoJSON();
var features_TDAD_WEST_SIDE_6 = format_TDAD_WEST_SIDE_6.readFeatures(json_TDAD_WEST_SIDE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_WEST_SIDE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_WEST_SIDE_6.addFeatures(features_TDAD_WEST_SIDE_6);
var lyr_TDAD_WEST_SIDE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_WEST_SIDE_6, 
                style: style_TDAD_WEST_SIDE_6,
                popuplayertitle: "TDAD_WEST_SIDE",
                interactive: true,
                title: '<img src="styles/legend/TDAD_WEST_SIDE_6.png" /> TDAD_WEST_SIDE'
            });
var format_BAGO_RIVERS_ALL_7 = new ol.format.GeoJSON();
var features_BAGO_RIVERS_ALL_7 = format_BAGO_RIVERS_ALL_7.readFeatures(json_BAGO_RIVERS_ALL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAGO_RIVERS_ALL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAGO_RIVERS_ALL_7.addFeatures(features_BAGO_RIVERS_ALL_7);
var lyr_BAGO_RIVERS_ALL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAGO_RIVERS_ALL_7, 
                style: style_BAGO_RIVERS_ALL_7,
                popuplayertitle: "BAGO_RIVERS_ALL",
                interactive: false,
                title: '<img src="styles/legend/BAGO_RIVERS_ALL_7.png" /> BAGO_RIVERS_ALL'
            });
var format_Caroni_River_8 = new ol.format.GeoJSON();
var features_Caroni_River_8 = format_Caroni_River_8.readFeatures(json_Caroni_River_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caroni_River_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caroni_River_8.addFeatures(features_Caroni_River_8);
var lyr_Caroni_River_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caroni_River_8, 
                style: style_Caroni_River_8,
                popuplayertitle: "Caroni_River",
                interactive: false,
                title: '<img src="styles/legend/Caroni_River_8.png" /> Caroni_River'
            });
var format_DiegoMartin_BlueBasin_River_9 = new ol.format.GeoJSON();
var features_DiegoMartin_BlueBasin_River_9 = format_DiegoMartin_BlueBasin_River_9.readFeatures(json_DiegoMartin_BlueBasin_River_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiegoMartin_BlueBasin_River_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiegoMartin_BlueBasin_River_9.addFeatures(features_DiegoMartin_BlueBasin_River_9);
var lyr_DiegoMartin_BlueBasin_River_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiegoMartin_BlueBasin_River_9, 
                style: style_DiegoMartin_BlueBasin_River_9,
                popuplayertitle: "DiegoMartin_BlueBasin_River",
                interactive: false,
                title: '<img src="styles/legend/DiegoMartin_BlueBasin_River_9.png" /> DiegoMartin_BlueBasin_River'
            });
var format_GRANDE_NorthOropouche_River_10 = new ol.format.GeoJSON();
var features_GRANDE_NorthOropouche_River_10 = format_GRANDE_NorthOropouche_River_10.readFeatures(json_GRANDE_NorthOropouche_River_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRANDE_NorthOropouche_River_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANDE_NorthOropouche_River_10.addFeatures(features_GRANDE_NorthOropouche_River_10);
var lyr_GRANDE_NorthOropouche_River_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANDE_NorthOropouche_River_10, 
                style: style_GRANDE_NorthOropouche_River_10,
                popuplayertitle: "GRANDE_NorthOropouche_River",
                interactive: false,
                title: '<img src="styles/legend/GRANDE_NorthOropouche_River_10.png" /> GRANDE_NorthOropouche_River'
            });
var format_Maraval_River_11 = new ol.format.GeoJSON();
var features_Maraval_River_11 = format_Maraval_River_11.readFeatures(json_Maraval_River_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maraval_River_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maraval_River_11.addFeatures(features_Maraval_River_11);
var lyr_Maraval_River_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maraval_River_11, 
                style: style_Maraval_River_11,
                popuplayertitle: "Maraval_River",
                interactive: false,
                title: '<img src="styles/legend/Maraval_River_11.png" /> Maraval_River'
            });
var format_Ortoire_Mayaro_River_12 = new ol.format.GeoJSON();
var features_Ortoire_Mayaro_River_12 = format_Ortoire_Mayaro_River_12.readFeatures(json_Ortoire_Mayaro_River_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ortoire_Mayaro_River_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ortoire_Mayaro_River_12.addFeatures(features_Ortoire_Mayaro_River_12);
var lyr_Ortoire_Mayaro_River_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ortoire_Mayaro_River_12, 
                style: style_Ortoire_Mayaro_River_12,
                popuplayertitle: "Ortoire_Mayaro_River",
                interactive: false,
                title: '<img src="styles/legend/Ortoire_Mayaro_River_12.png" /> Ortoire_Mayaro_River'
            });
var format_South_Oropouche_River_13 = new ol.format.GeoJSON();
var features_South_Oropouche_River_13 = format_South_Oropouche_River_13.readFeatures(json_South_Oropouche_River_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_South_Oropouche_River_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_South_Oropouche_River_13.addFeatures(features_South_Oropouche_River_13);
var lyr_South_Oropouche_River_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_South_Oropouche_River_13, 
                style: style_South_Oropouche_River_13,
                popuplayertitle: "South_Oropouche_River",
                interactive: false,
                title: '<img src="styles/legend/South_Oropouche_River_13.png" /> South_Oropouche_River'
            });
var format_BAGO_5KM_EAST_COAST_14 = new ol.format.GeoJSON();
var features_BAGO_5KM_EAST_COAST_14 = format_BAGO_5KM_EAST_COAST_14.readFeatures(json_BAGO_5KM_EAST_COAST_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAGO_5KM_EAST_COAST_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAGO_5KM_EAST_COAST_14.addFeatures(features_BAGO_5KM_EAST_COAST_14);
var lyr_BAGO_5KM_EAST_COAST_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAGO_5KM_EAST_COAST_14, 
                style: style_BAGO_5KM_EAST_COAST_14,
                popuplayertitle: "BAGO_5KM_EAST_COAST",
                interactive: false,
                title: '<img src="styles/legend/BAGO_5KM_EAST_COAST_14.png" /> BAGO_5KM_EAST_COAST'
            });
var format_BAGO_5KM_WEST_COAST_15 = new ol.format.GeoJSON();
var features_BAGO_5KM_WEST_COAST_15 = format_BAGO_5KM_WEST_COAST_15.readFeatures(json_BAGO_5KM_WEST_COAST_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAGO_5KM_WEST_COAST_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAGO_5KM_WEST_COAST_15.addFeatures(features_BAGO_5KM_WEST_COAST_15);
var lyr_BAGO_5KM_WEST_COAST_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAGO_5KM_WEST_COAST_15, 
                style: style_BAGO_5KM_WEST_COAST_15,
                popuplayertitle: "BAGO_5KM_WEST_COAST",
                interactive: false,
                title: '<img src="styles/legend/BAGO_5KM_WEST_COAST_15.png" /> BAGO_5KM_WEST_COAST'
            });
var format_OFFSHORE_ASSETS_RIGs_16 = new ol.format.GeoJSON();
var features_OFFSHORE_ASSETS_RIGs_16 = format_OFFSHORE_ASSETS_RIGs_16.readFeatures(json_OFFSHORE_ASSETS_RIGs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OFFSHORE_ASSETS_RIGs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OFFSHORE_ASSETS_RIGs_16.addFeatures(features_OFFSHORE_ASSETS_RIGs_16);
var lyr_OFFSHORE_ASSETS_RIGs_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OFFSHORE_ASSETS_RIGs_16, 
                style: style_OFFSHORE_ASSETS_RIGs_16,
                popuplayertitle: "OFFSHORE_ASSETS_RIGs",
                interactive: false,
                title: '<img src="styles/legend/OFFSHORE_ASSETS_RIGs_16.png" /> OFFSHORE_ASSETS_RIGs'
            });
var format_TDAD_5KM_EAST_COAST_17 = new ol.format.GeoJSON();
var features_TDAD_5KM_EAST_COAST_17 = format_TDAD_5KM_EAST_COAST_17.readFeatures(json_TDAD_5KM_EAST_COAST_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_5KM_EAST_COAST_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_5KM_EAST_COAST_17.addFeatures(features_TDAD_5KM_EAST_COAST_17);
var lyr_TDAD_5KM_EAST_COAST_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_5KM_EAST_COAST_17, 
                style: style_TDAD_5KM_EAST_COAST_17,
                popuplayertitle: "TDAD_5KM_EAST_COAST",
                interactive: false,
                title: '<img src="styles/legend/TDAD_5KM_EAST_COAST_17.png" /> TDAD_5KM_EAST_COAST'
            });
var format_TDAD_5KM_NORTH_COAST_18 = new ol.format.GeoJSON();
var features_TDAD_5KM_NORTH_COAST_18 = format_TDAD_5KM_NORTH_COAST_18.readFeatures(json_TDAD_5KM_NORTH_COAST_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_5KM_NORTH_COAST_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_5KM_NORTH_COAST_18.addFeatures(features_TDAD_5KM_NORTH_COAST_18);
var lyr_TDAD_5KM_NORTH_COAST_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_5KM_NORTH_COAST_18, 
                style: style_TDAD_5KM_NORTH_COAST_18,
                popuplayertitle: "TDAD_5KM_NORTH_COAST",
                interactive: false,
                title: '<img src="styles/legend/TDAD_5KM_NORTH_COAST_18.png" /> TDAD_5KM_NORTH_COAST'
            });
var format_TDAD_5KM_SOUTH_COAST_19 = new ol.format.GeoJSON();
var features_TDAD_5KM_SOUTH_COAST_19 = format_TDAD_5KM_SOUTH_COAST_19.readFeatures(json_TDAD_5KM_SOUTH_COAST_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_5KM_SOUTH_COAST_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_5KM_SOUTH_COAST_19.addFeatures(features_TDAD_5KM_SOUTH_COAST_19);
var lyr_TDAD_5KM_SOUTH_COAST_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_5KM_SOUTH_COAST_19, 
                style: style_TDAD_5KM_SOUTH_COAST_19,
                popuplayertitle: "TDAD_5KM_SOUTH_COAST",
                interactive: false,
                title: '<img src="styles/legend/TDAD_5KM_SOUTH_COAST_19.png" /> TDAD_5KM_SOUTH_COAST'
            });
var format_TDAD_5KM_WEST_COAST_20 = new ol.format.GeoJSON();
var features_TDAD_5KM_WEST_COAST_20 = format_TDAD_5KM_WEST_COAST_20.readFeatures(json_TDAD_5KM_WEST_COAST_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDAD_5KM_WEST_COAST_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDAD_5KM_WEST_COAST_20.addFeatures(features_TDAD_5KM_WEST_COAST_20);
var lyr_TDAD_5KM_WEST_COAST_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDAD_5KM_WEST_COAST_20, 
                style: style_TDAD_5KM_WEST_COAST_20,
                popuplayertitle: "TDAD_5KM_WEST_COAST",
                interactive: false,
                title: '<img src="styles/legend/TDAD_5KM_WEST_COAST_20.png" /> TDAD_5KM_WEST_COAST'
            });

lyr_F4Map2D_0.setVisible(true);lyr_fulldisk_ch13_1.setVisible(true);lyr_Archipelagic_Baseline_TNT_2.setVisible(true);lyr_ENTIRE_BAGO_3.setVisible(true);lyr_TDAD_EAST_SIDE_4.setVisible(true);lyr_TDAD_WEST_COAST_CONVERGENCE_5.setVisible(true);lyr_TDAD_WEST_SIDE_6.setVisible(true);lyr_BAGO_RIVERS_ALL_7.setVisible(true);lyr_Caroni_River_8.setVisible(true);lyr_DiegoMartin_BlueBasin_River_9.setVisible(true);lyr_GRANDE_NorthOropouche_River_10.setVisible(true);lyr_Maraval_River_11.setVisible(true);lyr_Ortoire_Mayaro_River_12.setVisible(true);lyr_South_Oropouche_River_13.setVisible(true);lyr_BAGO_5KM_EAST_COAST_14.setVisible(true);lyr_BAGO_5KM_WEST_COAST_15.setVisible(true);lyr_OFFSHORE_ASSETS_RIGs_16.setVisible(true);lyr_TDAD_5KM_EAST_COAST_17.setVisible(true);lyr_TDAD_5KM_NORTH_COAST_18.setVisible(true);lyr_TDAD_5KM_SOUTH_COAST_19.setVisible(true);lyr_TDAD_5KM_WEST_COAST_20.setVisible(true);
var layersList = [lyr_F4Map2D_0,lyr_fulldisk_ch13_1,lyr_Archipelagic_Baseline_TNT_2,lyr_ENTIRE_BAGO_3,lyr_TDAD_EAST_SIDE_4,lyr_TDAD_WEST_COAST_CONVERGENCE_5,lyr_TDAD_WEST_SIDE_6,lyr_BAGO_RIVERS_ALL_7,lyr_Caroni_River_8,lyr_DiegoMartin_BlueBasin_River_9,lyr_GRANDE_NorthOropouche_River_10,lyr_Maraval_River_11,lyr_Ortoire_Mayaro_River_12,lyr_South_Oropouche_River_13,lyr_BAGO_5KM_EAST_COAST_14,lyr_BAGO_5KM_WEST_COAST_15,lyr_OFFSHORE_ASSETS_RIGs_16,lyr_TDAD_5KM_EAST_COAST_17,lyr_TDAD_5KM_NORTH_COAST_18,lyr_TDAD_5KM_SOUTH_COAST_19,lyr_TDAD_5KM_WEST_COAST_20];
lyr_Archipelagic_Baseline_TNT_2.set('fieldAliases', {'Id': 'Id', });
lyr_ENTIRE_BAGO_3.set('fieldAliases', {'Id': 'Id', });
lyr_TDAD_EAST_SIDE_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Leng': 'Shape_Leng', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_TDAD_WEST_COAST_CONVERGENCE_5.set('fieldAliases', {'id': 'id', 'LOCATION': 'LOCATION', });
lyr_TDAD_WEST_SIDE_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Leng': 'Shape_Leng', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BAGO_RIVERS_ALL_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LENGTH': 'LENGTH', 'ALLRIV3_': 'ALLRIV3_', 'ALLRIV3_ID': 'ALLRIV3_ID', 'Shape_Length': 'Shape_Length', });
lyr_Caroni_River_8.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_DiegoMartin_BlueBasin_River_9.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_GRANDE_NorthOropouche_River_10.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_Maraval_River_11.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_Ortoire_Mayaro_River_12.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_South_Oropouche_River_13.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAMS_': 'STREAMS_', 'STREAMS_ID': 'STREAMS_ID', 'RIVCLASS': 'RIVCLASS', 'NAME': 'NAME', });
lyr_BAGO_5KM_EAST_COAST_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_BAGO_5KM_WEST_COAST_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_OFFSHORE_ASSETS_RIGs_16.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'AREA': 'AREA', });
lyr_TDAD_5KM_EAST_COAST_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_TDAD_5KM_NORTH_COAST_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_TDAD_5KM_SOUTH_COAST_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_TDAD_5KM_WEST_COAST_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'Id': 'Id', 'OBJECTID_2': 'OBJECTID_2', 'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Shape_Le_1': 'Shape_Le_1', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'layer': 'layer', 'path': 'path', });
lyr_Archipelagic_Baseline_TNT_2.set('fieldImages', {'Id': 'Range', });
lyr_ENTIRE_BAGO_3.set('fieldImages', {'Id': '', });
lyr_TDAD_EAST_SIDE_4.set('fieldImages', {'OBJECTID': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Leng': '', 'ORIG_FID': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_TDAD_WEST_COAST_CONVERGENCE_5.set('fieldImages', {'id': '', 'LOCATION': '', });
lyr_TDAD_WEST_SIDE_6.set('fieldImages', {'OBJECTID': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Leng': '', 'ORIG_FID': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_BAGO_RIVERS_ALL_7.set('fieldImages', {'OBJECTID': '', 'LENGTH': '', 'ALLRIV3_': '', 'ALLRIV3_ID': '', 'Shape_Length': '', });
lyr_Caroni_River_8.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_DiegoMartin_BlueBasin_River_9.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_GRANDE_NorthOropouche_River_10.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_Maraval_River_11.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_Ortoire_Mayaro_River_12.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_South_Oropouche_River_13.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STREAMS_': '', 'STREAMS_ID': '', 'RIVCLASS': '', 'NAME': '', });
lyr_BAGO_5KM_EAST_COAST_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_BAGO_5KM_WEST_COAST_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_OFFSHORE_ASSETS_RIGs_16.set('fieldImages', {'id': '', 'NAME': '', 'AREA': '', });
lyr_TDAD_5KM_EAST_COAST_17.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_TDAD_5KM_NORTH_COAST_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_TDAD_5KM_SOUTH_COAST_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_TDAD_5KM_WEST_COAST_20.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'Id': '', 'OBJECTID_2': '', 'GADMID': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'AndyID': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', 'Shape_Le_1': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'layer': '', 'path': '', });
lyr_Archipelagic_Baseline_TNT_2.set('fieldLabels', {'Id': 'no label', });
lyr_ENTIRE_BAGO_3.set('fieldLabels', {'Id': 'no label', });
lyr_TDAD_EAST_SIDE_4.set('fieldLabels', {'OBJECTID': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Leng': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_TDAD_WEST_COAST_CONVERGENCE_5.set('fieldLabels', {'id': 'no label', 'LOCATION': 'no label', });
lyr_TDAD_WEST_SIDE_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'GADMID': 'hidden field', 'ISO': 'hidden field', 'NAME_ENGLI': 'hidden field', 'NAME_ISO': 'hidden field', 'NAME_FAO': 'hidden field', 'NAME_LOCAL': 'hidden field', 'NAME_OBSOL': 'hidden field', 'NAME_VARIA': 'hidden field', 'NAME_NONLA': 'hidden field', 'NAME_FRENC': 'hidden field', 'NAME_SPANI': 'hidden field', 'NAME_RUSSI': 'hidden field', 'NAME_ARABI': 'hidden field', 'NAME_CHINE': 'hidden field', 'WASPARTOF': 'hidden field', 'CONTAINS': 'hidden field', 'SOVEREIGN': 'hidden field', 'ISO2': 'hidden field', 'WWW': 'hidden field', 'FIPS': 'hidden field', 'ISON': 'hidden field', 'VALIDFR': 'hidden field', 'VALIDTO': 'hidden field', 'AndyID': 'hidden field', 'POP2000': 'hidden field', 'SQKM': 'hidden field', 'POPSQKM': 'hidden field', 'UNREGION1': 'hidden field', 'UNREGION2': 'hidden field', 'DEVELOPING': 'hidden field', 'CIS': 'hidden field', 'Transition': 'hidden field', 'OECD': 'hidden field', 'WBREGION': 'hidden field', 'WBINCOME': 'hidden field', 'WBDEBT': 'hidden field', 'WBOTHER': 'hidden field', 'CEEAC': 'hidden field', 'CEMAC': 'hidden field', 'CEPLG': 'hidden field', 'COMESA': 'hidden field', 'EAC': 'hidden field', 'ECOWAS': 'hidden field', 'IGAD': 'hidden field', 'IOC': 'hidden field', 'MRU': 'hidden field', 'SACU': 'hidden field', 'UEMOA': 'hidden field', 'UMA': 'hidden field', 'PALOP': 'hidden field', 'PARTA': 'hidden field', 'CACM': 'hidden field', 'EurAsEC': 'hidden field', 'Agadir': 'hidden field', 'SAARC': 'hidden field', 'ASEAN': 'hidden field', 'NAFTA': 'hidden field', 'GCC': 'hidden field', 'CSN': 'hidden field', 'CARICOM': 'hidden field', 'EU': 'hidden field', 'CAN': 'hidden field', 'ACP': 'hidden field', 'Landlocked': 'hidden field', 'AOSIS': 'hidden field', 'SIDS': 'hidden field', 'Islands': 'hidden field', 'LDC': 'hidden field', 'Shape_Leng': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BAGO_RIVERS_ALL_7.set('fieldLabels', {'OBJECTID': 'no label', 'LENGTH': 'no label', 'ALLRIV3_': 'no label', 'ALLRIV3_ID': 'no label', 'Shape_Length': 'no label', });
lyr_Caroni_River_8.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'no label', });
lyr_DiegoMartin_BlueBasin_River_9.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'inline label - visible with data', });
lyr_GRANDE_NorthOropouche_River_10.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'no label', });
lyr_Maraval_River_11.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'inline label - visible with data', });
lyr_Ortoire_Mayaro_River_12.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'inline label - visible with data', });
lyr_South_Oropouche_River_13.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAMS_': 'no label', 'STREAMS_ID': 'no label', 'RIVCLASS': 'no label', 'NAME': 'no label', });
lyr_BAGO_5KM_EAST_COAST_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_BAGO_5KM_WEST_COAST_15.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_OFFSHORE_ASSETS_RIGs_16.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'AREA': 'no label', });
lyr_TDAD_5KM_EAST_COAST_17.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TDAD_5KM_NORTH_COAST_18.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TDAD_5KM_SOUTH_COAST_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TDAD_5KM_WEST_COAST_20.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'Id': 'no label', 'OBJECTID_2': 'no label', 'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Shape_Le_1': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TDAD_5KM_WEST_COAST_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});