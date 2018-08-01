import Phenomenon from 'phenomenon';

function px(fragment, uniforms, render, canvas) {
  new Phenomenon({ canvas }).add('p', {
    vertex: `
      attribute vec3 aPosition;
      uniform mat4 uProjectionMatrix;
      uniform mat4 uModelMatrix;
      uniform mat4 uViewMatrix;
      void main(){
        gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(aPosition, 1.0);
      }
    `,
    fragment,
    uniforms,
    mode: 4,
    onRender: p => render(p.uniforms),
    geometry: {
      vertices: [
        { x: -100.0, y: 100.0, z: 0.0 },
        { x: -100.0, y: -100.0, z: 0.0 },
        { x: 100.0, y: 100.0, z: 0.0 },
        { x: 100.0, y: -100.0, z: 0.0 },
        { x: -100.0, y: -100.0, z: 0.0 },
        { x: 100.0, y: 100.0, z: 0.0 },
      ],
    },
  });
}

export default px;
