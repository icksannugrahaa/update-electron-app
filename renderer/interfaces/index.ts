// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  interface Window {
    electron: {
      send: (message, data) => void;
      sayHello: () => void;
      invoke: (event) => string;
      receiveHello: (handler: (event, args) => void) => void;
      stopReceivingHello: (handler: (event, args) => void) => void;
      receiveToken: (handler: (event, args) => void) => void;
      stopReceivingToken: (handler: (event, args) => void) => void;
    };
  }
}

export type User = {
  id: number;
  name: string;
};
