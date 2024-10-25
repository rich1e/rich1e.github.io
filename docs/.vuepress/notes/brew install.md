```log
rich1e@macdeMacBook-Pro ~ % /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

**==>** **Checking for `sudo` access (which may request your password)...**

Password:

**==>** **This script will install:**

/opt/homebrew/bin/brew

/opt/homebrew/share/doc/homebrew

...

**==>** **The following new directories will be created:**

/opt/homebrew/bin

/opt/homebrew/etc

...

**==>** **The Xcode Command Line Tools will be installed.**

Press **RETURN**/**ENTER** to continue or any other key to abort:

...

**==>** **Searching online for the Command Line Tools**

**==>** **/usr/bin/sudo /usr/bin/touch /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress**

**==>** **Installing Command Line Tools for Xcode-14.3**

**==>** **/usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ for\ Xcode-14.3**

Software Update Tool

Finding available software

Downloading Command Line Tools for Xcode

Downloaded Command Line Tools for Xcode

Installing Command Line Tools for Xcode

Done with Command Line Tools for Xcode

Done.

**==>** **/usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools**

**==>** **/usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress**

**==>** **Downloading and installing Homebrew...**
==> **Updating Homebrew...**

**Warning**: /opt/homebrew/bin is not in your PATH.

  Instructions on how to configure your shell for Homebrew

  can be found in the 'Next steps' section below.

**==>** **Installation successful!**

**==>** **Homebrew has enabled anonymous aggregate formulae and cask analytics.**

**Read the analytics documentation (and how to opt-out) here:**

  **https://docs.brew.sh/Analytics**

No analytics data has been sent yet (nor will any be during this **install** run).

**==>** **Homebrew is run entirely by unpaid volunteers. Please consider donating:**

  https://github.com/Homebrew/brew#donations

**==>** **Next steps:**

- Run these commands in your terminal to add Homebrew to your **PATH**:

    echo >> /Users/rich1e/.zprofile

    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/rich1e/.zprofile

    eval "$(/opt/homebrew/bin/brew shellenv)"

- Run **brew help** to get started

- Further documentation:

    https://docs.brew.sh
```

执行官方脚本之后，需要再运行以下步骤。

![[meta/Pasted image 20241020211217.png]]

安装完成后，执行 `brew help`。

![[meta/Pasted image 20241020211350.png]]



```log
❯ brew tap-new $USER/local-tap
Warning: tap-new is a developer command, so Homebrew's
developer mode has been automatically turned on.
To turn developer mode off, run:
  brew developer off

Initialized empty Git repository in /opt/homebrew/Library/Taps/rich1e/homebrew-local-tap/.git/
[main (root-commit) 7e204ad] Create rich1e/local-tap tap
 Committer: rich1e <rich1e@macdeMacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 3 files changed, 97 insertions(+)
 create mode 100644 .github/workflows/publish.yml
 create mode 100644 .github/workflows/tests.yml
 create mode 100644 README.md
==> Created rich1e/local-tap
/opt/homebrew/Library/Taps/rich1e/homebrew-local-tap

When a pull request making changes to a formula (or formulae) becomes green
(all checks passed), then you can publish the built bottles.
To do so, label your PR as `pr-pull` and the workflow will be triggered.
```