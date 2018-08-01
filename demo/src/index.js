import Phenomenon from '../../src';

const fragment = `
  precision mediump float;
  uniform vec2 uResolution;
  uniform float uTime;
  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;
    float cs = sin(gl_FragCoord.y) * cos(gl_FragCoord.x);
    float d = -distance(uv, vec2(0.0, 0.0)) * 10.0;
    float c = sin(d + uTime + cs);
    gl_FragColor = vec4(cos(uv.y), c, sin(uv.y), 1.0);
  }
`;

const uniforms = {
  uTime: {
    type: 'float',
    value: 1.0,
  },
  uResolution: {
    type: 'vec2',
    value: [window.innerWidth, window.innerHeight],
  },
};

function render({ uTime, uResolution }) {
  uTime.value += 0.15;
  uResolution.value = [window.innerWidth, window.innerHeight];
}

Phenomenon(fragment, uniforms, render);
