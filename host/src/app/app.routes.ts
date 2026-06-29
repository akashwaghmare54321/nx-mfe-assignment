import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'mfeDashboard',
    loadChildren: () =>
      loadRemote<typeof import('mfeDashboard/Routes')>(
        'mfeDashboard/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'mfeProducts',
    loadChildren: () =>
      loadRemote<typeof import('mfeProducts/Routes')>(
        'mfeProducts/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
