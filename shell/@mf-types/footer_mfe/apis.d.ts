
    export type RemoteKeys = 'footer_mfe/footer';
    type PackageType<T> = T extends 'footer_mfe/footer' ? typeof import('footer_mfe/footer') :any;