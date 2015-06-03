(function () {
    //Nome de usuário de onde foi feito a cópia, assim você não precisa mudar tanta coisa.
    var fork = "Yemasthui";
		
    //Definir função pela extensão do bot.
    function extend() {
        //Se o bot não iniciou corretamente, tente novamente 1 segundo depois.
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaução para ter certeza de que foi atribuido corretamente.
        var bot = window.bot;

        //Carregar configurações personalizadas abaixo. ↓
        bot.retrieveSettings();

        /*
        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'deu-lhe um biscoito de merda',
                    'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
                    'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
                    'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... estranho',
                    'deu-lhe um biscoito da sorte, tem escrito: "Fode essa buceta!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Lívia rainha suprema"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Arrisque-se!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eta"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Foda com consciência :yellow_heart:"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Lívia rainha branca',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu-lhe um Oreo e um copo de leite.',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem um lixo!'
                ];
       

        //Carregar o pacote do chat novamente para registrar todas as mudanças
        bot.loadChat();

    }

    //Mudar as configurações padrões do bot e ter certeza que elas foram carregadas corretamente

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "SeaBot",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true ou false
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 9,
        autodisable: true,
        commandCooldown: 5,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
        ["tema", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 10,
        motd: "Favoritem a sala para voltar sempre que quiserem! Bjos da rainha :kiss:",
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink:null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
           NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Inicia o bot e o extende quando for completamente carregado.
    $.getScript("https://rawgit.com/" + fork + "/basicBot/master/basicBot.js", extend);
     $.getScript("https://dl.dropboxusercontent.com/s/bnecz1byja38twh/origem.js", extend);

}).call(this);
