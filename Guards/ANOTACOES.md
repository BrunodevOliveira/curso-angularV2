# Guards

- Responsável por controlar o acesso as rotas

## Tipos de rotas

- CanActivate ➡️ decide se uma rota (ou componente) pode ser ativada, como um sistema de login.

- CanDeactivate ➡️ decide se um usuário pode navegar para longe de uma rota (ou componente), como solicitar a confirmação de alterações pendentes.

- CanLoad ➡️ verifica se pode ou não carregar o módulo específico. Geralmente usado com Lazy-Load

- CanActivateChild é semelhante a CanActivate, mas se aplica a rotas aninhadas.

## Criar Guard

- ``ng g guard `
- Escolho o tipo de guarda que qeuro utilizar
