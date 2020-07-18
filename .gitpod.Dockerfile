FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

ENV DENO_DIR=/workspace/.deno
ENV DENO_INSTALL=$HOME/.deno
ENV PATH=$DENO_INSTALL/bin:$PATH
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

RUN sudo apt-get install squid -y && \
    sudo cp conf/squid.conf /etc/squid/. && \
    sudo htpasswd -c /etc/squid/.htpasswd user1 test && \
    sudo /etc/init.d/squid start

# coc.nvim
# https://github.com/neoclide/coc.nvim/wiki/Install-coc.nvim
RUN mkdir -p ~/.vim/pack/coc/start && \
    cd ~/.vim/pack/coc/start && \
    curl --fail -L https://github.com/neoclide/coc.nvim/archive/release.tar.gz|tar xzfv - && \
    mkdir -p ~/.config/coc/extensions && \
    cd ~/.config/coc/extensions && \
    echo '{"dependencies":{}}' > package.json && \
    npm install coc-tsserver coc-deno

