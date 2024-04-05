"use client"

import { useEffect, useState } from 'react'
import ScoreRectangle from './Score';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


declare var createUnityInstance: any;
declare var SendMessage: any;
declare var FocusCanvas: any;

export default function Home() {

  const [playerName, setPlayer] = useState('');
  const [showGame, setShowGame] = useState(false);

  var gameReady = false;

  // Called by Unity in GameControl's start function


  function FocusCanvas(focus: any) {
    if (gameReady) {
      SendMessage("GameControl", "FocusCanvas", focus);
    }
  }

  window.addEventListener('click', function (e) {
    if (e.target && (e.target as HTMLElement).id == "canvas") {
      // Clicked on canvas
      FocusCanvas("1");
    } else {
      // Clicked outside of canvas
      FocusCanvas("0");
    }
  });

  useEffect(() => {

    if(showGame){

    // function GameControlReady() {
    //   gameReady = true;
    // }

    /***
   * WebGL Game
   */
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var warningBanner = document.querySelector("#unity-warning");

    // Shows a temporary message banner/ribbon for a few seconds, or
    // a permanent error message on top of the canvas if type=='error'.
    // If type=='warning', a yellow highlight color is used.
    // Modify or remove this function to customize the visually presented
    // way that non-critical warnings and error messages are presented to the
    // user.
    // function unityShowBanner(_msg: string, type: string | undefined) {
    //   function updateBannerVisibility() {
    //     if (warningBanner) {
    //       (warningBanner as HTMLElement).style.display = warningBanner.children.length ? 'block' : 'none';
    //     }
    //   }
    //   var div = document.createElement('div');
    //   if (warningBanner) {
    //     warningBanner.appendChild(div);
    //     if (type == 'error') div.setAttribute('style', 'background: red; padding: 10px;');
    //     else {
    //       if (type == 'warning') div.setAttribute('style', 'background: yellow; padding: 10px;');
    //       setTimeout(function () {
    //         if (warningBanner) {
    //           warningBanner.removeChild(div);
    //           updateBannerVisibility();
    //         }
    //       }, 5000);
    //     }
    //     updateBannerVisibility();
    //   }
    // }

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/WebGL Builds.loader.js";
    var config = {
      dataUrl: buildUrl + "/WebGL Builds.data",
      frameworkUrl: buildUrl + "/WebGL Builds.framework.js",
      codeUrl: buildUrl + "/WebGL Builds.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "web2dTest",
      productVersion: "4.0.1",
      // showBanner: unityShowBanner,
    };

    // By default Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      var meta = document.createElement('meta');
      if (container) {
        container.className = "unity-mobile";
        if (canvas) {
          canvas.className = "unity-mobile";
        }

        // To lower canvas resolution on mobile devices to gain some
        // performance, uncomment the following line:
        // config.devicePixelRatio = 1;

        // unityShowBanner('WebGL builds are not supported on mobile devices.', 'warning');
      }
    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:
      if (canvas) {
        (canvas as HTMLCanvasElement).style.width = "960px";
        (canvas as HTMLCanvasElement).style.height = "600px";
      }
    }

    if (loadingBar) {
      (loadingBar as HTMLElement).style.display = "block";
    }

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress: number) => {
        if (progressBarFull) {
          (progressBarFull as HTMLElement).style.width = 100 * progress + "%";
        }
      }).then((unityInstance: { SetFullscreen: (arg0: number) => void; }) => {
        if (loadingBar) {
          (loadingBar as HTMLElement).style.display = "none";
        }
        if (fullscreenButton) {
          const button = fullscreenButton as HTMLButtonElement;
          button.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }
      }).catch((message: any) => {
        alert(message);
      });
    };
    document.body.appendChild(script);
  }
    /****/



  }, [showGame]);

  return <div className="grid grid-cols-5" style={{ backgroundColor: '#47697F' }}>
    {showGame ?

      <div>
        <div className="col-span-3" style={{ padding: '20px' }}>
          <div id="unity-container" className="unity-desktop" >
            <canvas id="unity-canvas" width="960" height="600" tabIndex={-1}></canvas>
            <div id="unity-loading-bar">
              <div id="unity-logo"></div>
              <div id="unity-progress-bar-empty">
                <div id="unity-progress-bar-full"></div>
              </div>
            </div>
            <div id="unity-warning"> </div>
          </div>
        </div>
        <div className="col-span-2">

          <h1>Esta jugando {playerName || "unknown"}</h1>
          <ScoreRectangle playerName={playerName}/>
        </div>
      </div>
      :
      <AlertDialog defaultOpen={true}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ingresa tu nombre</AlertDialogTitle>
            <AlertDialogDescription>
              <input value={playerName} onChange={(e) => {
                console.log(e.target.value)
                setPlayer(e.target.value)
              }} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction onClick={() => {setShowGame(true)}}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    }


  </div>
}
