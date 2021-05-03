import h, { HNode } from 'stage0';
import { refs, run } from '../service';
import './Nav.xcss';

type NavComponent = HNode<HTMLDivElement>;

interface RefNodes {
  auto: HTMLInputElement;
  compile: HTMLButtonElement;
  clear: HTMLButtonElement;
}

const view = h`
  <div id=nav class="dfc pv1 ph3">
    <h1 id=logo class=mv0>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 36 36" class="logo-icon di mr1">
        <path fill=#3b88c3 d="M36 32a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h28a4 4 0 014 4v28z"/>
        <path fill=#fff d="M30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 1.414.297 2.758.827 3.978l3.3-2.75A6 6 0 0115 12h8v4l7.2-6zm-.026 4.023l-3.301 2.75A6 6 0 0121 24h-8v-4l-7.2 6 7.2 6v-4h8c5.522 0 10-4.478 10-10a9.965 9.965 0 00-.826-3.977z"/>
      </svg>
      ekscss REPL
    </h1>

    <label for=auto class="auto label ml-auto mb0 mr3">
      <input id=auto type=checkbox class="checkbox mr2" checked #auto />
      Auto compile on input
    </label>
    <button class="button button-primary mr3" #compile>Compile</button>
    <button class=button #clear>Clear Output</button>
  </div>
`;

export function Nav(): NavComponent {
  const root = view as NavComponent;
  const { auto, compile, clear } = view.collect(root) as RefNodes;

  refs.auto = auto;

  compile.__click = run;

  clear.__click = () => {
    // refs.input.innerText = '';
    // refs.ouput.innerText = '';
    // refs.console.innerText = '';

    // refs.input.innerText = refs.ouput.innerText = refs.console.innerText = '';
    // refs.ouput.innerText = refs.console.innerText = '';

    refs.ouput.innerText = '';
    refs.console.innerText = '';
  };

  return root;
}
