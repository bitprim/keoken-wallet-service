var fileConfig = require('config');

var config = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3232,

  // Uncomment to make BWS a forking server
  // cluster: true,

  // Uncomment to set the number or process (will use the nr of availalbe CPUs by default)
  // clusterInstances: 4,

  // https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',
  ////// The following is only for certs which are not
  ////// trusted by nodejs 'https' by default
  ////// CAs like Verisign do not require this
  // CAinter1: '', // ex. 'COMODORSADomainValidationSecureServerCA.crt'
  // CAinter2: '', // ex. 'COMODORSAAddTrustCA.crt'
  // CAroot: '', // ex. 'AddTrustExternalCARoot.crt'

  storageOpts: {
    mongoDb: {
      uri: fileConfig.get('mongodbUrl')
    },
  },
  lockOpts: {
    //  To use locker-server, uncomment this:
    lockerServer: {
      host: 'localhost',
      port: 3231,
    },
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: 'http://localhost:3380',
    },
  },
  blockchainExplorerOpts: {
    btc: {
      livenet: {
        provider: fileConfig.get('explorer.btc.livenet.provider'),
        url: fileConfig.get('explorer.btc.livenet.url'),
        webSocketsUrl: fileConfig.get('explorer.btc.livenet.webSocketsUrl')
      },
      testnet: {
        provider: fileConfig.get('explorer.btc.testnet.provider'),
        url: fileConfig.get('explorer.btc.testnet.url'),
        // Multiple servers (in priority order)
        // url: ['http://a.b.c', 'https://test-insight.bitpay.com:443'],
        webSocketsUrl: fileConfig.get('explorer.btc.testnet.webSocketsUrl')
      },
    },
    bch: {
      livenet: {
        provider: fileConfig.get('explorer.bch.livenet.provider'),
        url: fileConfig.get('explorer.bch.livenet.url'),
        addressFormat: fileConfig.get('explorer.bch.livenet.addressFormat'),  // copay, cashaddr, or legacy
        webSocketsUrl: fileConfig.get('explorer.bch.livenet.webSocketsUrl')
      },
      testnet: {
        provider: fileConfig.get('explorer.bch.testnet.provider'),
        url: fileConfig.get('explorer.bch.testnet.url'),
        addressFormat: fileConfig.get('explorer.bch.testnet.addressFormat'),  // copay, cashaddr, or legacy
        webSocketsUrl: fileConfig.get('explorer.bch.testnet.webSocketsUrl')
      }
    }
  },
  pushNotificationsOpts: {
    templatePath: './lib/templates',
    defaultLanguage: 'en',
    defaultUnit: 'btc',
    subjectPrefix: '',
    pushServerUrl: 'https://fcm.googleapis.com/fcm',
    authorizationKey: 'You_have_to_put_something_here',
  },
  fiatRateServiceOpts: {
    defaultProvider: 'BitPay',
    fetchInterval: 60, // in minutes
  },
  // To use email notifications uncomment this:
  // emailOpts: {
  //  host: 'localhost',
  //  port: 25,
  //  ignoreTLS: true,
  //  subjectPrefix: '[Wallet Service]',
  //  from: 'wallet-service@bitcore.io',
  //  templatePath: './lib/templates',
  //  defaultLanguage: 'en',
  //  defaultUnit: 'btc',
  //  publicTxUrlTemplate: {
  //    btc: {
  //      livenet: 'https://insight.bitpay.com/tx/{{txid}}',
  //      testnet: 'https://test-insight.bitpay.com/tx/{{txid}}',
  //    },
  //    bch: {
  //      livenet: 'https://bch-insight.bitpay.com/#/tx/{{txid}}',
  //      testnet: 'https://test-bch-insight.bitpay.com/#/tx/{{txid}}',
  //    }
  //  },
  // },
  // To use sendgrid:
  // var sgTransport = require('nodemail-sendgrid-transport');
  // mailer:sgTransport({
  //  api_user: xxx,
  //  api_key: xxx,
  // });
};
module.exports = config;
