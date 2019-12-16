const environment = process.env as {[key: string]: string};

export class Config {
  public static REGION = environment.REGION;
  // public static DYNAMODB_DEVICE_DATA_TABLE = environment.DYNAMODB_TABLE_NAME;
  // public static CLIENT_POOL_ID = environment.CLIENT_POOL_ID;
  // public static DYNAMODB_TABLE_NAME = environment.DYNAMODB_TABLE_NAME;
}
