(() => {

    const CONFIG = {

        urlBase:
        "https://diegocht.github.io/PANEL_LATERAL.IO/lote_info.html",

        ancho:430,

        zIndex:999999

    };

    const estado = {

        iniciado:false,

        panel:null,

        iframe:null,

        loteActual:null,

        abierto:false

    };

    function crearPanel(){

        if(estado.panel) return;

        const panel=document.createElement("div");

        panel.id="panel-lateral-assturias";

        panel.style.position="fixed";
        panel.style.left="0";
        panel.style.top="0";
        panel.style.width=CONFIG.ancho+"px";
        panel.style.height="100vh";
        panel.style.background="#fff";
        panel.style.boxShadow="0 0 20px rgba(0,0,0,.35)";
        panel.style.zIndex=CONFIG.zIndex;
        panel.style.transform="translateX(-100%)";
        panel.style.transition="transform .25s ease";
        panel.style.overflow="hidden";

        const iframe=document.createElement("iframe");

        iframe.style.width="100%";
        iframe.style.height="100%";
        iframe.style.border="0";

        panel.appendChild(iframe);

        document.body.appendChild(panel);

        estado.panel=panel;
        estado.iframe=iframe;

    }

    function mostrar(){

        estado.panel.style.transform="translateX(0)";

        estado.abierto=true;

    }

    function ocultar(){

        estado.panel.style.transform="translateX(-100%)";

        estado.abierto=false;

    }

    function escucharMensajes(){

    window.addEventListener("message",(e)=>{

        if(!e.data) return;

        if(e.data.origen!=="PanelLateral") return;

        switch(e.data.accion){

            case "cerrar":

                PanelLateral.cerrar();

                break;

            case "ABRIR_FORMULARIO":

                console.log(
                    "Formulario solicitado",
                    e.data.datos
                );

                break;

            default:

                console.log(
                    "Acción no reconocida:",
                    e.data.accion
                );

        }

    });

}

    window.PanelLateral={

        version:"1.0.0",

        init(){

            if(estado.iniciado) return;

            crearPanel();

            escucharMensajes();

            estado.iniciado=true;

            console.log("PanelLateral iniciado");

        },

        abrir(lote){

            if(!estado.iniciado){

                this.init();

            }

            estado.loteActual=lote;

            estado.iframe.src =
    CONFIG.urlBase +
    "?lote=" +
    encodeURIComponent(lote) +
    "&v=" +
    Date.now();

            mostrar();

        },

        cerrar(){

            ocultar();

        }

    };

    window.abrirLote=function(lote){

        PanelLateral.abrir(lote);

    };

})();
