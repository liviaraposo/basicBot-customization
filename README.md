basicBot-customization
======================

[![Join the chat at https://gitter.im/motelbible/basicBot-customization](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/motelbible/basicBot-customization?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Um bot não tão básico para o plug.dj 

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/motelbible/basicBot)

Criado por [Yemasthui](https://github.com/Yemasthui) mas agora mantido por [Benzi](https://github.com/Benzi) e traduzido por [Motel Bible](https://github.com/motelbible)

(Você pode me mandar uma mensagem no [Gitter](https://gitter.im/motelbible) se tiver alguma dúvida ou problema com o bot)

---

Clique [aqui](https://github.com/Yemasthui/basicBot) para visitar o repositório oficial do basicBot.

Usar configurações personalizadas ou adicionar funcionalidades é feito através do carregamento do seu próprio script e modificação do bot.
O propósito deste repositório é para facilitar isso. Você pode fazer uma cópia (fork) deste repositório e customizar o [o exemplo](https://github.com/motelbible/basicBot-customization/blob/master/extension.js). 
Quando você tiver copiado o repositório, salve o seguinte script na barra de favoritos do seu navegador, __mas substitua _motelbible_ por seu nome de usuário do github__. 

`javascript:(function(){$.getScript('https://rawgit.com/motelbible/basicBot-customization/master/extension.js');})();`

Se você usa algum serviço de hospedagem para seu script, troque o link pelo seu próprio.

Uma visão detalhada das possíveis configurações podem ser encontradas [aqui](https://github.com/motelbible/basicBot-customization/blob/master/settingsOverview.md).

###Blacklists###

Blacklists podem ser adicionadas nas configurações para os links através do arquivo .json com o mesmo formato nos exemplos dados (copiando e usando o [link de desenvolvimento do rawgit](https://rawgit.com/) é, também, uma boa maneira de fazer isto),
ou substituindo o link com uma função personalizada que carrega sua lista no bot (essa opção requer conhecimento em javascript e bom entendimento das funções dentro do bot).

Para atualizar sua lista manualmente, você pode usar os detalhes especificados no chat depois que a música for listada como "proibida", ou use um dos comandos no 'console' periodicamente:
```javascript
bot.getNewBlacklistedSongs(); //Carrega objeto
bot.logNewBlacklistedSongs(); //Carrega a lista
```


Copyright
---------
Copyright &copy; 2014 Yemasthui
