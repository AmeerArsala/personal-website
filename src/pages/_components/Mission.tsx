import { type Component, onMount } from "solid-js";
import { SolidTyper } from "solid-typer";
import { typewriterFinished } from "@data/client/stores";
//import { useStore } from '@nanostores/solid';

const Mission: Component = () => {
  //const $typewriterFinished = useStore(typewriterFinished);
  onMount(() => {
    typewriterFinished.set(false);
  });

  return (
    <div class="flex flex-col items-center justify-center mx-auto">
      <p class="text-white text-center whitespace-pre-line text-2xl w-[50vw]">
        <SolidTyper
          text={[
            "Theory will only get you so far.\n So I'm building:"
          ]}
          backspaceSpeed={30}
          typingSpeed={80}
          onFinish={() => { typewriterFinished.set(true); }}
        />
      </p>
    </div>
  );
};

export default Mission;
