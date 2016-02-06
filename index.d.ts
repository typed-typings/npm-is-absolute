declare function isAbsolute (path: string): boolean;

declare namespace isAbsolute {
  export function posix (path: string): boolean;
  export function win32 (path: string): boolean;
}

export = isAbsolute;
