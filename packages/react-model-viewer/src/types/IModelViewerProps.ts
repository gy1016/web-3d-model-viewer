import { ModelAttr } from './ModelAttr';

export type ModelSrc = File | string;
export type ModelType = 'gltf' | 'glb' | 'obj' | 'stl' | 'ply';
export type ZippedModelMap = Record<string, Uint8Array>;

// 公共的组件应该实现的 Props
export interface IModelViewerProps {
  // 传入的源文件类型
  src: ModelSrc;
  // 支持 GZip 的源地址
  zippedSrc?: ModelSrc;
  type: ModelType;
  fileName?: string;

  width?: number;
  height?: number;
  backgroundColor?: string;
  style?: Record<string, string | number>;
  // 是否展示属性浮窗
  withAttr?: boolean;

  cameraControls?: boolean;
  autoplay?: boolean;
  autoRotate?: boolean;
  shadowIntensity?: number;
  timeout?: number;

  onTopology?: (modelAttr: ModelAttr) => void;
  onSnapshot?: (blob: Blob) => void;
  onZip?: (zippedArrayBuffer: ArrayBuffer) => void;
}

export const defaultModelViewerProps: Partial<IModelViewerProps> = {
  width: 300,
  height: 200,
  cameraControls: true,
  autoplay: true,
  autoRotate: true,
  shadowIntensity: 0,
  timeout: 30 * 1000
};