**Install Oh My Zsh**

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

**zsh-completions**

Manual installation

-   Clone the repository:  
      git clone https://github.com/zsh-users/zsh-completions.git  
    
-   Include the directory in your $fpath, for example by adding in ~/.zshrc:  
      fpath=(path/to/zsh-completions/src $fpath)  
    
-   You may have to force rebuild zcompdump:  
      rm -f ~/.zcompdump; compinit  
    

[Fix Oh My Zsh “Insecure completion-dependent directories detected”](https://osxdaily.com/2021/12/29/fix-oh-my-zsh-insecure-completion-dependent-directories-detected/)

**autojump**

Add the following line to your ~/.bash_profile or ~/.zshrc file:

```shell
[ -f /opt/homebrew/etc/profile.d/autojump.sh ] && . /opt/homebrew/etc/profile.d/autojump.sh
```


Restart your terminal for the settings to take effect.


zsh completions have been installed to:

  /opt/homebrew/share/zsh/site-functions

**zsh-autosuggestions**

1.  Clone this repository into $ZSH_CUSTOM/plugins (by default ~/.oh-my-zsh/custom/plugins)  
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions  
    
2.  Add the plugin to the list of plugins for Oh My Zsh to load (inside ~/.zshrc):  
    plugins=( 
3.      # other plugins...
4.      zsh-autosuggestions
5.  )  
      
    
6.  Start a new terminal session.  
    

`bindkey '∆' autosuggest-toggle`


[https://stackoverflow.com/questions/12382499/looking-for-altleftarrowkey-solution-in-zsh](https://stackoverflow.com/questions/12382499/looking-for-altleftarrowkey-solution-in-zsh)

[https://eastmanreference.com/complete-list-of-applescript-key-codes](https://eastmanreference.com/complete-list-of-applescript-key-codes)