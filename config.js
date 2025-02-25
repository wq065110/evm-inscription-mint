const config = {
    // 你想要打多少张，这里就设置多少，建议单次别超过 50，不然容易不上链
    repeatCount: 1000,

    // 在当前的 gas 基础上增加多少倍
    increaseGas: 0,

    // 每一笔交易停顿多久（毫秒为单位，1000=1秒）
    sleepTime: 1000,

    // 付费金额（默认为 0 转
    payPrice: "0",

    // 你钱包的私钥
    privateKey: "",

    // 接收地址（也可以是合约地址），如果为空就是给自己发。
    // gate铭文的合约地址 0x02a0197781ed6d4fe5e0b36599fc4fda812a5817
    receiveAddress: "xxx",

    // 铭文json数据（替换成你想打的铭文json格式数据）
    //tokenJson: 'data:,{"p":"fair-20","op":"mint","tick":"fair","amt":"1000"}',
	//tokenJson: data:,{"a":"NextInscription","p":"oprc-20","op":"mint","tick":"PoS","amt":"10"}
    tokenJson: '',
    // 铭文hex数据（如是：tokenJson为空，则会使用tokenDataHex数据，直接使用16进制数据打）
    // 如果 tokenJson 和 tokenDataHex 都为空，则会使用空的 data 直接打
    // 比如gate的铭文就是直接使用下面的data数据打
    // gate铭文17进制数据:  0x1249c58b
    tokenDataHex: '',

    // RPC结点（兼容 evm 链都行）打哪条链就用哪条链的节点地址
    // eth =>  https://mainnet.infura.io/v3
    // arb => https://arb1.arbitrum.io/rpc
    // polygon => https://polygon-rpc.com
    // op => https://mainnet.optimism.io
    // linea => https://mainnet.infura.io/v3
    // scroll => https://rpc.scroll.io
    // zks => https://mainnet.era.zksync.io
    // bnbchain => https://bsc-dataseed1.bnbchain.org
    // conflux = > https://evm.confluxrpc.com
    // gateio => https://evm.gatenode.cc
    // goeri => https://rpc.ankr.com/eth_goerli

    rpcUrl: "https://evm.gatenode.cc"
}

module.exports = config
