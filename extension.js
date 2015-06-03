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
                    'deu-lhe um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Lívia rainha branca',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu-lhe um Oreo e um copo de leite.',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem um lixo!'
                ];
        */
        
        bot.commands.testCommand = {
            command: ['test'], //Exemplo de comando
            rank: 'user', //user/bouncer/mod/manager
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/Testando!"); // Mensagem a ser enviada no chat
                }
            }
        };

        //Carregar o pacote do chat novamente para registrar todas as mudanças
        bot.loadChat();

    }

    //Mudar as configurações padrões do bot e ter certeza que elas foram carregadas corretamente

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Sea Bot",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true ou false
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 65,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 6,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
        	["caralho", "ngm gostou desse caralho"],
        	["eta", "Mudei pq quis, eai???"],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível porra. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "",
        filterChat: true,
        etaRestriction: false,
        welcome: Welcome/Bem vindo! =[,
        opLink: null,
        rulesLink: Regras aqui! https://attachment.fbsbx.com/file_download.php?id=1601180993495159&eid=ASst_Efv-SLfhLvkR2JA-BmocpxFlbov36QkFMBTGN2HnHtRvOgEZnO3eeyYTrm7RNA&inline=1&ext=1433359020&hash=AStXonmQvc1006o9,
        themeLink: null,
        fbLink: Curta nossos parceiros no FaceBook: http://senta.la/1r34x (e) http://senta.la/1r34y,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
          
        }
    }));

    //Inicia o bot e o extende quando for completamente carregado.
    $.getScript("https://rawgit.com/" + fork + "/basicBot/master/basicBot.js", extend);

}).call(this);
