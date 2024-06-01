{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
    pkgs.nodePackages.vercel
    pkgs.git
  ];
  programs.git = {
    enable = true;
   # userName  = "mcpeapsUnterstrichHD";
   # userEmail = "mcpeaps_HD@outlook.com";
   # lfs.enable = true;
  #};
  idx = {
    extensions = [
    "bierner.emojisense"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-complete-tag"
    "formulahendry.auto-rename-tag"
    "aaron-bond.better-comments"
    "edwinhuish.better-comments-next"
    "alefragnani.Bookmarks"
    "chunsen.bracket-select"
    "ms-vscode.brackets-pack"
    "ms-vscode.brackets-keybindings"
    "vmware.vscode-manifest-yaml"
    "streetsidesoftware.code-spell-checker"
    "adpyke.codesnap"
    "naumovs.color-highlight"
    "kamikillerto.vscode-colorize"
    "pranaygp.vscode-css-peek"
    "sndst00m.markdown-github-dark-pack"
    "batisteo.vscode-django"
    "mikestead.dotenv"
    "hall.draw"
    "hediet.vscode-drawio"
    "dsznajder.es7-react-js-snippets"
    "dbaeumer.vscode-eslint"
    "tamasfe.even-better-toml"
    "GrapeCity.gc-excelviewer"
    "mindaro-dev.file-downloader"
    "Wattenberger.footsteps"
    "streetsidesoftware.code-spell-checker-german"
    "ivangabriele.vscode-git-add-and-commit"
    "waderyan.gitblame"
    "donjayamanne.git-extension-pack"
    "mhutchie.git-graph"
    "donjayamanne.githistory"
    "paragdiwan.gitpatch"
    "felipecaputo.git-project-manager"
    "shyykoserhiy.git-autoconfig"
    "github.vscode-github-actions"
    "ms-vscode.vscode-github-issue-notebooks"
    "GitHub.vscode-pull-request-github"
    "codezombiech.gitignore"
    "eamodio.gitlens"
    "ms-vscode.hexeditor"
    "vincaslt.highlight-matching-tag"
    "ecmel.vscode-html-css"
    "kisstkondoros.vscode-gutter-preview"
    "wix.vscode-import-cost"
    "oderwat.indent-rainbow"
    "qufiwefefwoyn.inline-sql-syntax"
    "Zignd.html-css-class-completion"
    "ms-vscode.vscode-typescript-next"
    "wholroyd.jinja"
    "atlassian.atlascode"
    "ms-toolsai.jupyter"
    "ms-toolsai.vscode-jupyter-cell-tags"
    "ms-toolsai.jupyter-keymap"
    "ms-toolsai.jupyter-renderers"
    "ms-toolsai.vscode-jupyter-slideshow"
    "ms-vscode.live-server"
    "ritwickdey.LiveServer"
    "yandeu.five-server"
    "yzhang.markdown-all-in-one"
    "DavidAnson.vscode-markdownlint"
    "PKief.material-icon-theme"
    "PulkitGangwar.nextjs-app-directory-commands"
    "PulkitGangwar.nextjs-snippets"
    "ziyasal.vscode-open-in-github"
    "IBM.output-colorizer"
    "alefragnani.project-manager"
    "mechatroner.rainbow-csv"
    "qcz.restart-ts-server-button"
    "Gruntfuggly.todo-tree"
    "Gydunhn.vsc-essentials"
    "DotJoshJohnson.xml"
    "redhat.vscode-yaml"
    "gamunu.vscode-yarn"
  ];
  workspace ={
    onCreate = {
    yarn-install = "yarn install";
  };
  onStart = {
    #nameGit = "git config user.name \"mcpeapsUnterstrichHD\"";
    #emailGit = "git config user.email \"mcpeaps_HD@outlook.com\"";
    checkoutGit = "git checkout dev";
    fetchGit = "git fetch";
    pullGit = "git pull";
    yarn-upgrade = "yarn upgrade";
    addGit = "git add .";
    commitGit = "git commit -m \"IDX Initail update\" --allow-empty";
    pushGit = "git push -u origin dev";
  };
  };
  previews = {
    previews = {
      web = {
        command = [
          "yarn"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
};
}