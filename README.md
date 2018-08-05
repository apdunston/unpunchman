# UnPunchMan

An example game for a talk about making games.

## The Program

### Building

In Mac:

```bash
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds
```

In Windows:

```PowerShell
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Quiet Game Talk"
```

## Story

All the citizens of Helping Town were very helpful and happy. But then came
Opposite Day! Now help hurts and hurt helps. Their only hope is Big Terri,
the retired boxer. Every time he punches someone, they feel better!

He promised he'd never punch anyone again.

But promises don't work on Opposite Day...

### Ending

The villain has a machine that will make it opposite day forever. At the
end the player has to let the villain succeed. He turns on his machine
and it brings Opposite Day to an end. It didn't work as expected because
them machine. Was built. On opposite day.

## Plans

### Mechanics

* Punch somebody and they feel better.
* When they feel better, they'll try to help you.
* Their med-kits will make you weaker.
* Getting hit by a car will heal you.
* Pits will make you fly up instead of fall down.
* Spikes and electricity will help you.

### Sprite Sheets

* https://www.gameart2d.com/werewolf-terror-game-sprites.html
* https://www.gameart2d.com/freebies.html

### Talk

Sights, Sounds, and Choices

A game is a series of meaningful choices.
A video game is a machine that provides meaningful choices by painting, singing, and listening.

It paints, it sings, and it listens.

How I'm making games:

1. Start with an idea.
2. Make it work a little bit.
3. Follow what's cool.