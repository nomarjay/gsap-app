# Install required packages
sudo apt update
sudo apt install gnome-keyring libsecret-1-0 dbus-x11

# Start dbus and keyring daemon
eval $(dbus-launch)
eval $(gnome-keyring-daemon --start --components=secrets)

# Create/unlock the login keyring (using empty password - just press Enter when prompted)
echo -n "" | gnome-keyring-daemon --unlock

# Export the environment variables
export GNOME_KEYRING_CONTROL
export SSH_AUTH_SOCK

# Now try CodeRabbit auth
coderabbit auth login