type ISmartApiData = {
  jwtToken: string;
  refreshToken: string;
  feedToken: string;
};
type TradeDetails = {
  netQty: string;
  optionType: 'CE' | 'PE';
  strike: string;
  token: string;
  symbol: string;
  closed: boolean;
  expireDate: string;
  tradedPrice: number;
  tradingSymbol: string;
  exchange: string;
};
type MtmValue = {
  time: string;
  value: string;
};
type Historytype = {
  exchange: string;
  symboltoken: string;
  interval: string;
  fromdate: string;
  todate: string;
};
enum HistoryInterval {
  ONE_MINUTE = 'ONE_MINUTE',
  THREE_MINUTE = 'THREE_MINUTE',
  FIVE_MINUTE = 'FIVE_MINUTE',
  TEN_MINUTE = 'TEN_MINUTE',
  FIFTEEN_MINUTE = 'FIFTEEN_MINUTE',
  THIRTY_MINUTE = 'THIRTY_MINUTE',
  ONE_HOUR = 'ONE_HOUR',
  ONE_DAY = 'ONE_DAY',
}
enum Strategy {
  RSI = 'rsi',
  SHORTSTRADDLE = 'shortStraddle',
}
type JsonFileStructure = {
  isTradeExecuted: boolean;
  tradeDate?: string;
  accountDetails: {
    capitalUsed: number;
  };
  tradeDetails: TradeDetails[];
  isTradeClosed: boolean;
  mtm: MtmValue[];
};
type Position = {
  symboltoken: string;
  symbolname: string;
  instrumenttype: string;
  priceden: string;
  pricenum: string;
  genden: string;
  gennum: string;
  precision: string;
  multiplier: string;
  boardlotsize: string;
  exchange: string;
  producttype: string;
  tradingsymbol: string;
  symbolgroup: string;
  strikeprice: string;
  optiontype: 'CE' | 'PE';
  expirydate: string;
  lotsize: string;
  cfbuyqty: string;
  cfsellqty: string;
  cfbuyamount: string;
  cfsellamount: string;
  buyavgprice: string;
  sellavgprice: string;
  avgnetprice: string;
  netvalue: string;
  netqty: string;
  totalbuyvalue: string;
  totalsellvalue: string;
  cfbuyavgprice: string;
  cfsellavgprice: string;
  totalbuyavgprice: string;
  totalsellavgprice: string;
  netprice: string;
  buyqty: string;
  sellqty: string;
  buyamount: string;
  sellamount: string;
  pnl: string;
  realised: string;
  unrealised: string;
  ltp: string;
  close: string;
};
type Credentails = {
  APIKEY: string;
  CLIENT_CODE: string;
  CLIENT_PIN: string;
  CLIENT_TOTP_PIN: string;
};
type OrderStoreDataType = {
  QUANTITY: number;
  EXPIRYDATE: string;
  INDEX: string;
  LOSSPERLOT: number;
  INDIAVIX: number;
};
type ScripMasterStoreDataType = {
  SCRIP_MASTER_JSON: object[];
};
type CheckPosition = { position: Position; trades: TradeDetails[] };
type getLtpDataType = {
  exchange: string;
  tradingsymbol: string;
  symboltoken: string;
};
type LtpDataType = {
  exchange: string;
  tradingsymbol: string;
  symboltoken: string;
  open: number;
  high: number;
  low: number;
  close: number;
  ltp: number;
};
type getScripFutType = {
  scriptName: string;
};
type getScripType = {
  scriptName: string;
  strikePrice?: string;
  optionType?: 'CE' | 'PE';
  expiryDate: string;
};
type scripMasterResponse = {
  token: string;
  symbol: string;
  name: string;
  expiry: string;
  strike: string;
  lotsize: string;
  instrumenttype: string;
  exch_seg: string;
  tick_size: string;
};

type doOrderType = {
  tradingsymbol: string;
  symboltoken: string;
  transactionType: string | undefined;
  productType?: 'DELIVERY' | 'CARRYFORWARD' | 'MARGIN' | 'INTRADAY' | 'BO';
  lotSize: number;
  variety: 'NORMAL' | 'STOPLOSS';
  ordertype: 'MARKET' | 'LIMIT' | 'STOPLOSS_LIMIT' | 'STOPLOSS_MARKET';
  triggerprice?: number;
  price?: number;
  isHedge?: boolean;
};
type doOrderResponse = {
  status: boolean;
  message: string;
  errorcode: string;
  data: {
    script: string;
    orderid: string;
  };
};
type getPositionByTokenType = {
  positions: Position[];
  token: string;
};
type shouldCloseTradeType = {
  ltp: number;
  avg: number;
  trade: Position;
};
type delayType = {
  milliSeconds: number | undefined | string;
};
type TimeComparisonType = { hours: number; minutes: number };
type bodyType = {
  api_key: string;
  client_code: string;
  client_pin: string;
  client_totp_pin: string;
};
type reqType = { body: bodyType };
type ShortStraddleData = {
  stikePrice: string;
  expiryDate: string;
  netQty: string;
  ceOrderToken: string;
  peOrderToken: string;
  ceOrderSymbol: string;
  peOrderSymbol: string;
  ceOrderStatus: boolean;
  peOrderStatus: boolean;
};
type AddShortStraddleData = {
  data: JsonFileStructure;
  shortStraddleData: ShortStraddleData;
};
type BothPresent = { ce: boolean; pe: boolean; stike: string };
type OrderData = {
  stikePrice: string;
  expiryDate: string;
  token: string;
  symbol: string;
  status: boolean;
  exchange: string;
};
enum OptionType {
  CE = 'CE',
  PE = 'PE',
}
type checkPositionToCloseType = {
  openPositions: Position[];
};
enum CheckOptionType {
  BOTH_CE_PE_PRESENT = 'both_present',
  ONLY_CE_PRESENT = 'ce_present',
  ONLY_PE_PRESENT = 'pe_present',
  BOTH_CE_PE_NOT_PRESENT = 'ce_pe_not_present',
}
type runOrbType = {
  scriptName: string;
  price: number;
  maxSl: number;
  tradeDirection: 'up' | 'down';
  trailSl: number;
};
type updateMaxSlType = { mtm: number; maxSl: number; trailSl: number };
enum INDICES {
  NIFTY = 'NIFTY',
  MIDCPNIFTY = 'MIDCPNIFTY',
  FINNIFTY = 'FINNIFTY',
  BANKNIFTY = 'BANKNIFTY',
  SENSEX = 'SENSEX',
}
type checkBothLegsType = {
  cepe_present: CheckOptionType;
  atmStrike: number;
};

type GetNearestStrike = {
  algoTrades: Position[];
  atmStrike: number;
};
type GetCurrentTimeAndPastTimeType = {
  currentTime: string;
  pastTime: string;
};
type DataRecord = {
  mtm: number;
  tradeDate: string;
  ordersExecuted: number;
  brokerageWithTax: number;
  indices: string;
};
type OrderBookResponseType = {
  variety: string;
  ordertype: string;
  producttype: string;
  duration: string;
  price: string;
  triggerprice: string;
  quantity: string;
  disclosedquantity: string;
  squareoff: string;
  stoploss: string;
  trailingstoploss: string;
  tradingsymbol: string;
  transactiontype: string;
  exchange: string;
  symboltoken: string;
  instrumenttype: string;
  strikeprice: string;
  optiontype: string;
  expirydate: string;
  lotsize: string;
  cancelsize: string;
  averageprice: string;
  filledshares: string;
  unfilledshares: string;
  orderid: number;
  text: string;
  status: string;
  orderstatus: string;
  updatetime: string;
  exchtime: string;
  exchorderupdatetime: string;
  fillid: string;
  filltime: string;
  parentorderid: string;
  uniqueorderid: string;
};
