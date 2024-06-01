{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
  ];
  #programs.git = {
   # enable = true;
   # userName  = "mcpeapsUnterstrichHD";
   # userEmail = "mcpeaps_HD@outlook.com";
   # lfs.enable = true;
  #};
  idx = {
    extensions = [
    "kamikillerto.vscode-colorize"
    "faceair.ayu-one-dark" 
    "edwinhuish.better-comments-next"
    "PulkitGangwar.nextjs-app-directory-commands"
    "PulkitGangwar.nextjs-snippets"
    "deskbtm.colorful-monorepo"
    "ParthR2031.colorful-comments"
    "gamunu.vscode-yarn"
    
  ];
  workspace ={
    onCreate = {
    yarn-install = "yarn install";
  };
  onStart = {
    #nameGit = "git config user.name \"mcpeapsUnterstrichHD\"";
    #emailGit = "git config user.email \"mcpeaps_HD@outlook.com\"";
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