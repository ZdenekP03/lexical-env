const clickArea = document.getElementById("main-div")


const r = new rive.Rive({
    src: "lexical_env_animated_export.riv",
    //src: 'event_loop.riv',
    canvas: document.getElementById("rive-canvas1"),
    autoplay: true,
    layout: new rive.Layout({
        fit: rive.Fit.contain,
        alignment: rive.Alignment.Center,
    }),
    artboard: "lexical env", // Optional. If not supplied the default is selected
    stateMachines: "StateMachine",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();

        const inputs = r.stateMachineInputs('StateMachine');
        const step = inputs.find(i => i.name === 'step');
        step.value = 0;

        clickArea.addEventListener("click", ()=>{
            if (step.value < 9 ){
                step.value++;
            }
        });

        clickArea.addEventListener("contextmenu", (event)=>{
            event.preventDefault(); // Prevent right-click menu
            if (step.value > 0){
                step.value--;
            }
        });
    }
});


window.addEventListener('resize', ()=>{
        r.resizeDrawingSurfaceToCanvas();
    })

