Vagrant.configure("2") do |config|
  config.vm.box = "scotch/box"
  config.vm.provision "shell", inline: <<-SHELL
    if ! [ -L /var/www ]; then
      rm -rf /var/www
      ln -fs /vagrant /var/www
    fi
    echo "Provision almost complete..."
  SHELL
  config.vm.network :forwarded_port, guest: 80, host:4567
end
