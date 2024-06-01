{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
  ];
  idx.extensions = [
    "kamikillerto.vscode-colorize"
    "faceair.ayu-one-dark" 
    "edwinhuish.better-comments-next"
    "PulkitGangwar.nextjs-app-directory-commands"
    "PulkitGangwar.nextjs-snippets"
    "deskbtm.colorful-monorepo"
    "ParthR2031.colorful-comments"
  ];
  idx.workspace.onCreate = {
    yarn-install = "yarn install";
  };
 idx.workspace.onStart = {
    fetchGit = "git fetch";
    pullGit = "git pull";
    yarn-upgrade = "yarn upgrade";
  };
  idx.previews = {
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
}