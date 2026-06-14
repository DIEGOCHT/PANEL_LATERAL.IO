(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"scrollBarMargin":2,"xrPanelsEnabled":true,"start":"this.init()","id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnInfoWindow":false},"defaultLocale":"es","name":"Player10117","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"propagateClick":false,"layout":"absolute","hash": "1afa9a9bffa1073a15d91b03056e3ed61032e845fc4d9e1b29275e29e1d74356", "definitions": [{"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","width":"100%","surfaceReticleColor":"#FFFFFF","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTop":0,"progressHeight":2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"subtitlesBottom":50,"playbackBarBottom":5,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"playbackBarHeadShadowVerticalLength":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":"33%","toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"id":"MainViewer","toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","propagateClick":false,"playbackBarBorderSize":0,"toolTipPaddingTop":4,"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","minHeight":50,"minWidth":100,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressOpacity":0.7,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerColor":"#FFFFFF","height":"100%","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0},{"hfovMax":103,"hfovMin":"150%","id":"panorama_A079A21E_B480_13B7_41C1_4696B414011B","frames":[{"front":{"levels":[{"rowCount":4,"height":2048,"url":"media/panorama_A079A21E_B480_13B7_41C1_4696B414011B_0/f/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":4,"tags":"ondemand","width":2048},{"rowCount":2,"height":1024,"url":"media/panorama_A079A21E_B480_13B7_41C1_4696B414011B_0/f/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":2,"tags":"ondemand","width":1024},{"rowCount":1,"height":512,"url":"media/panorama_A079A21E_B480_13B7_41C1_4696B414011B_0/f/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":1,"tags":["ondemand","preload"],"width":512}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A079A21E_B480_13B7_41C1_4696B414011B_t.webp","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_A079A21E_B480_13B7_41C1_4696B414011B_t.webp","class":"Panorama","data":{"label":"LOGO ARAGON"},"hfov":30,"partial":true,"label":trans('panorama_A079A21E_B480_13B7_41C1_4696B414011B.label'),"vfov":13.92},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"class":"PanoramaCamera","id":"panorama_A079A21E_B480_13B7_41C1_4696B414011B_camera","initialPosition":{"pitch":0,"hfov":42,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_A079A21E_B480_13B7_41C1_4696B414011B_camera","media":"this.panorama_A079A21E_B480_13B7_41C1_4696B414011B","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minWidth":0,"gap":10,"height":"100%","class":"Player","scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"clone":TDV.Tour.Script.clone,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openLink":TDV.Tour.Script.openLink,"getOverlays":TDV.Tour.Script.getOverlays,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getKey":TDV.Tour.Script.getKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setValue":TDV.Tour.Script.setValue,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"unloadViewer":TDV.Tour.Script.unloadViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"init":TDV.Tour.Script.init,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showWindowBase":TDV.Tour.Script.showWindowBase,"existsKey":TDV.Tour.Script.existsKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"createTween":TDV.Tour.Script.createTween,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"registerKey":TDV.Tour.Script.registerKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"shareSocial":TDV.Tour.Script.shareSocial,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initQuiz":TDV.Tour.Script.initQuiz,"disableVR":TDV.Tour.Script.disableVR,"translate":TDV.Tour.Script.translate,"toggleVR":TDV.Tour.Script.toggleVR,"setLocale":TDV.Tour.Script.setLocale,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"enableVR":TDV.Tour.Script.enableVR},"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Wed Jun 10 2026