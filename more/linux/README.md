# Linux

## 設定 PATH

You need to add it to your ~/.profile or ~/.bashrc file.

```
export PATH=$PATH:/path/to/dir
```

Depending on what you're doing, you also may want to symlink to binaries:

```
cd /usr/bin
sudo ln -s /path/to/binary binary-name
```

Note that this will not automatically update your path for the remainder of the session. To do this, you should run:

```
source ~/.profile 
or
source ~/.bashrc
```
