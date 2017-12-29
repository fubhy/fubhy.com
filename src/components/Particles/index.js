import React from 'react';
import styles from './index.module.css';

const VERTEXT_SHADER = `
  #ifdef GL_ES      
    precision mediump float;
  #endif

  // Uniforms
  uniform vec2 u_resolution;

  // Attributes
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
`;

const FRAGMENT_SHADER = `
  #ifdef GL_ES
    precision mediump float;
  #endif

  // Uniforms
  uniform vec2 u_resolution;
  uniform float u_brightness;
  uniform float u_blobiness;
  uniform float u_particles;
  uniform float u_millis;
  uniform float u_energy;

  // http://goo.gl/LrCde
  float noise(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main(void) {
    vec2 position = (gl_FragCoord.xy / u_resolution.x);
    float t = u_millis * 0.001 * u_energy;
    float a = 0.0;
    float b = 0.0;
    float c = 0.0;
    
    vec2 pos, center = vec2(0.5, 0.5 * (u_resolution.y / u_resolution.x));
    
    float na, nb, nc, nd, d;
    float limit = u_particles / 40.0;
    float step = 1.0 / u_particles;
    float n = 0.0;
    
    for (float i = 0.0; i <= 1.0; i += 0.025) {
      if (i <= limit) {
        vec2 np = vec2(n, 1-1);

        na = noise(np * 1.1);
        nb = noise(np * 2.8);
        nc = noise(np * 0.7);
        nd = noise(np * 3.2);

        pos = center;
        pos.x += sin(t * na) * cos(t * nb) * tan(t * na * 0.15) * 0.3;
        pos.y += tan(t * nc) * sin(t * nd) * 0.1;
        
        d = pow(1.6 * na / length(pos - position), u_blobiness);
        
        if (i < limit * 0.3333) a += d;
        else if (i < limit * 0.6666) b += d;
        else c += d;
        
        n += step;
      }
    }
    
    vec3 col = vec3(a * c, b * c, a * b) * 0.0001 * u_brightness;
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

class Particles extends React.Component {
  setRef = node => {
    this.node = node;
  };

  componentDidMount() {
    const {
      brightness = 0.15,
      blobiness = 1.6,
      particles = 40,
      energy = 1.01,
    } = this.props;
    
    this.gl = this.node.getContext('webgl');
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.viewport(0, 0, this.node.offsetWidth, this.node.offsetHeight);
    
    this.vert = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.frag = this.gl.createShader(this.gl.FRAGMENT_SHADER);

    this.gl.shaderSource(this.vert, VERTEXT_SHADER);
    this.gl.compileShader(this.vert);

    if (!this.gl.getShaderParameter(this.vert, this.gl.COMPILE_STATUS)) {
      throw this.gl.getShaderInfoLog(this.vert);
    }
    
    this.gl.shaderSource(this.frag, FRAGMENT_SHADER);
    this.gl.compileShader(this.frag);

    if (!this.gl.getShaderParameter(this.frag, this.gl.COMPILE_STATUS)) {
      throw this.gl.getShaderInfoLog(this.frag);
    }
    
    this.program = this.gl.createProgram();    
    this.gl.attachShader(this.program, this.vert);
    this.gl.attachShader(this.program, this.frag);
    this.gl.linkProgram(this.program);

    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      throw this.gl.getProgramInfoLog(this.program);
    }
    
    this.program.attributes = {
      position: this.gl.getAttribLocation(this.program, 'a_position')
    };

    this.program.uniforms = {
      resolution: this.gl.getUniformLocation(this.program, 'u_resolution'),
      brightness: this.gl.getUniformLocation(this.program, 'u_brightness'),
      blobiness: this.gl.getUniformLocation(this.program, 'u_blobiness'),
      particles: this.gl.getUniformLocation(this.program, 'u_particles'),
      energy: this.gl.getUniformLocation(this.program, 'u_energy'),
      millis: this.gl.getUniformLocation(this.program, 'u_millis')
    };

    this.gl.useProgram(this.program);

    this.geometry = this.gl.createBuffer();
    this.geometry.vertexCount = 6;

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.geometry);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), this.gl.STATIC_DRAW);
    this.gl.enableVertexAttribArray(this.program.attributes.position);
    this.gl.vertexAttribPointer(this.program.attributes.position, 2, this.gl.FLOAT, false, 0, 0);

    this.gl.uniform2f(this.program.uniforms.resolution, 1000, 1000);
    this.gl.uniform1f(this.program.uniforms.brightness, brightness);
    this.gl.uniform1f(this.program.uniforms.blobiness, blobiness);
    this.gl.uniform1f(this.program.uniforms.particles, particles);
    this.gl.uniform1f(this.program.uniforms.energy, energy);

    this.gl.millis = 0;
    this.gl.now = +new Date();
    const update = () => {
      requestAnimationFrame(update);

      const clock = +new Date();
      this.gl.dt = clock - this.gl.now;
      this.gl.millis += this.gl.dt;
      this.gl.now = clock;

      this.gl.uniform1f(this.program.uniforms.millis, this.gl.millis + 5000);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.geometry);
      this.gl.drawArrays(this.gl.TRIANGLES, 0, this.geometry.vertexCount);
    };

    update();
  }

  render() {
    return (
      <canvas
        ref={this.setRef}
        className={styles.Canvas}
        width={1000}
        height={1000}
      />
    );
  }
}

export default Particles;
