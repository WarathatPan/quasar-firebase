export interface CustomerStateInterface {
  mailer: unknown;
}

function state(): CustomerStateInterface {
  return {
    mailer: {},
  };
}

export default state;
