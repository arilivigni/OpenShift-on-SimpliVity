(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{225:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-the-ansible-node-on-fedora"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ansible-node-on-fedora","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Ansible node on Fedora")]),e._v(" "),o("p",[e._v("You are required to deploy the Ansible contoller on Fedora, to take advantage of the built-in support for\nPython 3. The solution requires Fedora 29 and Ansible 2.8.1 and the node should be directly connected to\nthe proxy-free VLAN.")]),e._v(" "),o("p",[e._v("The playbooks work from a non-privileged account. You should use an account named "),o("code",[e._v("core")]),e._v(" as this will ensure consistency with deployed CoreOS machines that have a built-in account "),o("code",[e._v("core")]),e._v(". In addition, any non-CoreOS VMs created by the playbooks will have a user account created with the same name as the user that ran the playbooks.")]),e._v(" "),o("p",[e._v("You should ensure that the "),o("code",[e._v("core")]),e._v(" user can password-less "),o("code",[e._v("sudo")]),e._v(" and you should set the "),o("code",[e._v("ssh_key")]),e._v(" variable in\nyour configuration files to the default public key for the "),o("code",[e._v("core")]),e._v(" user ("),o("code",[e._v("~/.ssh/id_rsa.pub")]),e._v(").")]),e._v(" "),o("h2",{attrs:{id:"create-fedora-vm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-fedora-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Fedora VM")]),e._v(" "),o("p",[e._v("Create a Virtual Machine with the following characteristics:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Guest OS:")]),e._v(" Red Hat Fedora Server 29 (64-bit)")]),e._v(" "),o("li",[o("strong",[e._v("Disk:")]),e._v(" 50G (thin provisioning)")]),e._v(" "),o("li",[o("strong",[e._v("CPU:")]),e._v(" 2")]),e._v(" "),o("li",[o("strong",[e._v("RAM:")]),e._v(" 4 GB")]),e._v(" "),o("li",[o("strong",[e._v("Ethernet Adapter:")]),e._v(" VMXNET 3, connected to your Ansible or management network")])]),e._v(" "),o("p",[e._v("Install Fedora Server 29 using the appropriate ISO image for the distro (x86 64 bit) and in\nthe "),o("code",[e._v("Software Selection")]),e._v(" section, choose:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Base Environment:")]),e._v(" Fedora Server Edition")]),e._v(" "),o("li",[o("strong",[e._v("Add-Ons for Selected Environment:")]),e._v(" Guest Agent")])]),e._v(" "),o("p",[e._v("Select your language, keyboard, and timezone settings and re-boot when the installation finishes. Configure your networking and check your connectivity before moving on to the next section.")]),e._v(" "),o("h2",{attrs:{id:"install-ansible-and-required-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-ansible-and-required-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Install Ansible and required modules")]),e._v(" "),o("p",[e._v("Log in to the root account and run the following commands to install "),o("code",[e._v("git")]),e._v(", "),o("code",[e._v("ansible")]),e._v(" and some Python modules:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dnf update -y\ndnf install -y git ansible python3-netaddr python3-requests python3-pyvmomi python3-pip\n \ncd /usr/bin\nln -s python3.7 python\n")])])]),o("h2",{attrs:{id:"password-less-sudo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#password-less-sudo","aria-hidden":"true"}},[e._v("#")]),e._v(" Password-less sudo")]),e._v(" "),o("p",[e._v("Make sure that you set up password-less "),o("code",[e._v("sudo")]),e._v(" for the "),o("code",[e._v("core")]),e._v(" user. Become "),o("code",[e._v("root")]),e._v(" user and")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("usermod -a -G wheel core\n")])])]),o("p",[e._v("As root, run "),o("code",[e._v("visudo")]),e._v(" to edit "),o("code",[e._v("/etc/sudoers")]),e._v(" and make the following changes. The advantage of using "),o("code",[e._v("visudo")]),e._v(" is that it will validate the changes to the file.")]),e._v(" "),o("p",[e._v("The default "),o("code",[e._v("/etc/sudoers")]),e._v(" file contains two lines for group "),o("code",[e._v("wheel")]),e._v(". Uncomment the "),o("code",[e._v("NOPASSWD:")]),e._v(" line and comment out the other wheel line. When you are done, it should look like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("## Allows people in group wheel to run all commands\n#%wheel ALL=(ALL)       ALL\n\n## Same thing without a password\n%wheel ALL=(ALL)       NOPASSWD: ALL\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);