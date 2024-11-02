injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});


                    var textStyleCache_municipiosdelacomunidaddemadrid={}
                    var clusterStyleCache_municipiosdelacomunidaddemadrid={}
                    var style_municipiosdelacomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdelacomunidaddemadrid'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(141,90,153,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_municipiosdelacomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdelacomunidaddemadrid'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_vaspecuarias = function(){ return {"Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(49,0,126,1.0)"}),
zIndex: 0
                            })
                            ],
"Abrevadero-Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(0,0,129,1.0)"}),
zIndex: 0
                            })
                            ],
"Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(0,50,179,1.0)"}),
zIndex: 0
                            })
                            ],
"Cañada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(0,125,255,1.0)"}),
zIndex: 0
                            })
                            ],
"Colada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(0,189,255,1.0)"}),
zIndex: 0
                            })
                            ],
"Colada y Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(23,215,139,1.0)"}),
zIndex: 0
                            })
                            ],
"Colada y Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(42,169,42,1.0)"}),
zIndex: 0
                            })
                            ],
"Colada y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(42,200,42,1.0)"}),
zIndex: 0
                            })
                            ],
"Colada, Abrevadero y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(83,255,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Cordel": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(159,255,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Cordel y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,255,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,152,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Descansadero-Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,101,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Paso de ganados": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,0,0,1.0)"}),
zIndex: 0
                            })
                            ],
"Vereda": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,0,127,1.0)"}),
zIndex: 0
                            })
                            ],
"Vereda y Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,34,144,1.0)"}),
zIndex: 0
                            })
                            ],
"Vereda y Colada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,134,194,1.0)"}),
zIndex: 0
                            })
                            ],
"Vereda y Cordel": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,174,215,1.0)"}),
zIndex: 0
                            })
                            ],
"Vereda y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,215,235,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_vaspecuarias = {"Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Abrevadero-Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cañada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Colada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Colada y Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Colada y Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Colada y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Colada, Abrevadero y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cordel": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cordel y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Descansadero-Abrevadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Paso de ganados": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vereda": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vereda y Camino": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vereda y Colada": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vereda y Cordel": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vereda y Descansadero": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_vaspecuarias={}
                    var clusterStyleCache_vaspecuarias={}
                    var style_vaspecuarias = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_vaspecuarias'
        };
                        
                        var value = feature.get("IT_TIPO");
                        var style = categories_vaspecuarias()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_vaspecuarias = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_vaspecuarias'
        };
                        var value = feature.get("IT_TIPO");
                        var style = categoriesSelected_vaspecuarias[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'Stamen terrain',
    source: new ol.source.Stamen({
        crossOrigin: 'anonymous',
        layer: 'terrain'}),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_municipiosdelacomunidaddemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_municipiosdelacomunidaddemadrid,
                    selectedStyle: selectionStyle_municipiosdelacomunidaddemadrid,
                    title: "Municipios de la Comunidad de Madrid",
                    id: "solo_madrid_776bab72_1b20_4537_a300_a8d462878380",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["ID_0", "ISO", "NAME_0", "ID_1", "NAME_1", "ID_2", "NAME_2", "ID_3", "NAME_3", "ID_4", "NAME_4", "VARNAME_4", "TYPE_4", "ENGTYPE_4"],
                    geometryType: "Polygon"
                });
var lyr_municipiosdelacomunidaddemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_municipiosdelacomunidaddemadrid});
municipiosdelacomunidaddemadrid_geojson_callback = function(geojson) {
                              lyr_municipiosdelacomunidaddemadrid.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_municipiosdelacomunidaddemadrid_overview.setSource(lyr_municipiosdelacomunidaddemadrid.getSource());
                        };
var lyr_vaspecuarias = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_vaspecuarias,
                    selectedStyle: selectionStyle_vaspecuarias,
                    title: "Vías Pecuarias",
                    id: "SIGI_MA_VIAS_PECUARIASPolygon20191031135551074",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table'><tr bgcolor='#D8D3D3'>     <th height='29' colspan='2'>Humedales Protegidos</th><tr>     <td width='155'>Nombre</td><td width='220' style='text-align:left'><p><span style='text-align:right'>[DS_NOMBRE]</span></p></td></tr><tr bgcolor='#F1F1F1'>       <td>Término municipal</td><td style='text-align:left'><p>[DS_MUNICIP]</p></td></tr><tr>         <td>Tipo</td><td style='text-align:left'><p>[IT_TIPO]</p></td></tr> </table>",
                    attributes: ["CDID", "CD_ID", "DS_MUNICIP", "CD_CODIGO", "DS_NOMBRE", "IT_TIPO", "IT_CLASIFI", "IT_AMOJONA", "IT_DESLIND"],
                    geometryType: "Polygon"
                });
var lyr_vaspecuarias_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_vaspecuarias});
vaspecuarias_geojson_callback = function(geojson) {
                              lyr_vaspecuarias.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_vaspecuarias_overview.setSource(lyr_vaspecuarias.getSource());
                        };

lyr_municipiosdelacomunidaddemadrid.setVisible(true);
lyr_vaspecuarias.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_municipiosdelacomunidaddemadrid,lyr_vaspecuarias];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_municipiosdelacomunidaddemadrid':lyr_municipiosdelacomunidaddemadrid,'lyr_vaspecuarias':lyr_vaspecuarias};
var legendData = {"SIGI_MA_VIAS_PECUARIASPolygon20191031135551074": [{"href": "1_0.png", "title": "Abrevadero"}, {"href": "1_1.png", "title": "Abrevadero-Descansadero"}, {"href": "1_2.png", "title": "Camino"}, {"href": "1_3.png", "title": "Ca\u00f1ada"}, {"href": "1_4.png", "title": "Colada"}, {"href": "1_5.png", "title": "Colada y Abrevadero"}, {"href": "1_6.png", "title": "Colada y Camino"}, {"href": "1_7.png", "title": "Colada y Descansadero"}, {"href": "1_8.png", "title": "Colada, Abrevadero y Descansadero"}, {"href": "1_9.png", "title": "Cordel"}, {"href": "1_10.png", "title": "Cordel y Descansadero"}, {"href": "1_11.png", "title": "Descansadero"}, {"href": "1_12.png", "title": "Descansadero-Abrevadero"}, {"href": "1_13.png", "title": "Paso de ganados"}, {"href": "1_14.png", "title": "Vereda"}, {"href": "1_15.png", "title": "Vereda y Camino"}, {"href": "1_16.png", "title": "Vereda y Colada"}, {"href": "1_17.png", "title": "Vereda y Cordel"}, {"href": "1_18.png", "title": "Vereda y Descansadero"}], "solo_madrid_776bab72_1b20_4537_a300_a8d462878380": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-492605.338327, 4857387.870480, -394450.784091, 4977956.099513];
var unitsConversion = 1;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: []
});



var BasicApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  componentDidMount: function() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_municipiosdelacomunidaddemadrid_overview,lyr_vaspecuarias_overview]}));
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable: function() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery: function() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _hideAboutPanel: function(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  },
  _toggleChartPanel: function(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render: function() {
    var toolbarOptions = {title:"Vías Pecuarias de la Comunidad de Madrid"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
      )
      ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:false,
                                        showZoomTo:false, allowReordering:true,
                                        allowFiltering:false, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:false, map:map,
                                        includeLegend:false, allowStyling:true, showTable:false})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
