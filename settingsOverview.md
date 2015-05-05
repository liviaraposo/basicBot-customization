Roomsettings
============

Configurações detalhadas
------------------------

Tente manter números inteiros: sem decimais. 
Strings (valores) vão dentro de aspas " ", se você quiser usar uma aspa " dentro do valor, use \". 
Booleans (variáveis) sempre serão 'true' ou 'false', sem o '.

- "language": escolha um dos pacotes de idiomas suportados. Se nenhum idioma válido for encontrado, ele usará o pacote padrão ou um pacote especificado. Tipo: string
- "chatLink": link de um arquivo .json contendo um pacote de idioma. Tipo: string
- "maximumAfk": quantidade em minutos que um usuário pode permanecer inativo na comunidade se o afkCheck estiver habilitado. Tipo: número
- "afkRemoval": liga/desliga afkCheck. Tipo: boolean             
- "maximumDc": quantidade em minutos que um usuário pode usar dclookup depois de ter sido desconectado da comunidade. Tipo: número 
- "bouncerPlus": liga/desliga o modo bouncer+.Tipo: boolean                
- "lockdownEnabled": liga/desliga lockdown. Lockdown significa que somente a staff pode conversar no chat (deixe como falso).                
- "lockGuard": liga/desliga lockguard. Lockguard garante que a fila de espera não fica travada por mais tempo que o permitido. Tipo: boolean: true/false
- "maximumLocktime": tempo máximo que a fila de espera fica travada quando lockguard estiver ligado. Tipo: número
- "cycleGuard": liga/desliga cycleguard. Cycleguard garante que o ciclo de DJs não seja mais longo que a quantidade permitida em minutos. Tipo: boolean
- "maximumCycletime": Tempo máximo que o ciclo de DJs pode ficar ligado se o cycleguard estiver ativado. Tipo : número
- "timeGuard": liga/desliga o timeguard. Timeguard garante que músicas não sejam mais longas que o tempo especificado. A música é pulada se o tempo for excedido. Tipo: boolean
- "maximumSongLength": duração máxima permitida para músicas se timeguard estiver ativado. Tipo: número
- "autodisable": se ativado, o chatbot envia !afkdisable e !joindisable no chat num intervalo de 1 hora. Estes comandos desativam mensagens de AFKers e "autojoin" para usuários da extensão plugCubed. Tipo: boolean                
- "commandCooldown": tempo de espera (em segundos) dos comandos do chatbot para usuários (sempre existirá tempo de espera para evitar spam). Tipo: número
- "usercommandsEnabled": ativa/desativa os comandos para usuários. Tipo: boolean                
- "lockskipPosition": a posição para qual !lockskip moverá usuários na fila de espera. Tipo: número
- "lockskipReasons": possíveis razões para adicionar ao comando !lockskip. Formato como abaixo:

    	```
    	[
    		["razão1", "explicação1"],
    		["razão2", "explicação2"],
    		...
    		["razãoX", "explicaçãoX"]
    	]
    	```
    	
- "afkpositionCheck": somente usuários abaixo da posição na fila de espera serão avaliados por inatividade. Tipo: número
- "afkRankCheck": somente pessoas com o rank especificado (e/ou abaixo) serão verificadas por inatividade. Possíveis ranks: 
	"user", "residentdj", "bouncer", "manager", "cohost", "host", "ambassador", "admin"
   	ex.: "bouncer" - usuários normais, DJs residentes e seguranças serão avaliados por inatividade.                
- "motdEnabled": marca como ativa/inativa a mensagem do dia. Tipo: boolean
- "motdInterval": intervalo padrão para o MotD (mensagem do dia). Num intervalo de X músicas, o chatbot enviará a mensagem do dia. Tipo: número
- "motd": mensagem do dia. Recomendado definir mensagem do dia através do comando !motd. Tipo: string                
- "filterChat": ativa/desativa o filtro do chat. Tipo: boolean
- "etaRestriction": ativa a restrição do comando !eta. Restringe apenas usuários cinzas. Comando só pode ser usado depois de 1 hora após a última vez. Tipo: boolean
- "welcome": liga/desliga mensagem de boas vindas. Tipo: boolean
- "opLink": link opcional para as músicas "Overplayed". Deixar "null" se não houver link. Tipo: string
- "rulesLink": link opcional de uma lista de regras. Deixar "null" se não houver link. Tipo: string
- "themeLink": link opcional para o tema da comunidade (permissão de gêneros, etc). Deixar "null" se não houver link. Tipo: string
- "fbLink": link opcional para uma página do Facebook. Deixar "null" se não houver link. Tipo: string,
- "youtubeLink": link opcional para um vídeo/canal do YouTube. Deixar "null" se não houver link. Tipo: string,
- "website": link opcional para um website. Deixar "null" se não houver link. Tipo: string,
- "intervalMessages": matriz de mensagens que aparecem num intervalo de X músicas. Deixar em branco para não mostrar nenhuma mensagem. Formato:
	`["mensagem 1", "mensagem 2", "mensagem 3"]`
- "messageInterval": intervalo de X músicas para matriz de mensagens. Tipo: número
- "songstats": ativa/desativa estatísticas de votos da músicas anterior. Tipo: boolean
- "commandLiteral": símbolo usado para iniciar comandos. Tipo: string
- "blacklists": lista de listas negras e link para as fontes. Tipo: string ou função
