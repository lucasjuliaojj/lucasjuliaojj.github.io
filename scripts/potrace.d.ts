declare module "potrace" {
  interface TraceOptions {
    threshold?: number;
    turdSize?: number;
    alphaMax?: number;
    optTolerance?: number;
  }

  export function trace(
    image: Buffer,
    options: TraceOptions,
    callback: (error: Error | null, svg: string) => void,
  ): void;
}
