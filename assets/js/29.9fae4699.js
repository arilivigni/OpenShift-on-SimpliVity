(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{233:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"initial-cluster-deployment-using-site-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-cluster-deployment-using-site-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" Initial cluster deployment using "),s("code",[e._v("site.yml")])]),e._v(" "),s("p",[e._v("Once you have configured your environment, run the  playbook "),s("code",[e._v("site.yml")]),e._v(" to perform the initial cluster deployment:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd ~/Openshift-on-SimpliVity\n# ansible-playbook -i hosts site.yml --vault-password-file .vault_pass\n")])])]),s("p",[s("code",[e._v("site.yml")]),e._v(" is a wrapper for a number of playblooks that perform different functions:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ansible-playbook -i hosts playbooks/prepare.yml\nansible-playbook -i hosts playbooks/provision.yml\nansible-playbook -i hosts playbooks/configure.yml\nansible-playbook -i hosts playbooks/poweron.yml\nansible-playbook -i hosts playbooks/finish.yml\n\n")])])]),s("h2",{attrs:{id:"prepare"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),s("p",[e._v("The preparation stage includes the following tasks:")]),e._v(" "),s("ul",[s("li",[e._v("Installs client tools")]),e._v(" "),s("li",[e._v("Create infrastructure and cluster folders")]),e._v(" "),s("li",[e._v("Populates "),s("code",[e._v("/etc/hosts")])]),e._v(" "),s("li",[e._v("Configures and starts up HTTP server on Ansible box")]),e._v(" "),s("li",[e._v("Sets up firewall rules")])]),e._v(" "),s("h2",{attrs:{id:"provision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provision","aria-hidden":"true"}},[e._v("#")]),e._v(" Provision")]),e._v(" "),s("p",[e._v("The provision stage includes the following tasks:")]),e._v(" "),s("ul",[s("li",[e._v("Prepare Ignition data files")]),e._v(" "),s("li",[e._v("Provision bootsrap, master and CoreOS worker nodes")]),e._v(" "),s("li",[e._v("Provision and power on infrastructure and supporting nodes, including load balancers and NFS")])]),e._v(" "),s("h2",{attrs:{id:"configure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure")]),e._v(" "),s("p",[e._v("The configuration phase consists of:")]),e._v(" "),s("ul",[s("li",[e._v("Configuring DRS rules")]),e._v(" "),s("li",[e._v("Configuring infrastructure nodes - Configure DNS, DHCP. Set up disks, RedHat subscription.")]),e._v(" "),s("li",[e._v("Configuring supporting nodes - Configure load balancer and NFS nodes.  Set up disks, RedHat subscription.")])]),e._v(" "),s("h2",{attrs:{id:"power-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#power-on","aria-hidden":"true"}},[e._v("#")]),e._v(" Power on")]),e._v(" "),s("p",[e._v("This stage powers on any nodes that have not already been started. It waits for the OpenShift API server port on the master nodes to be ready and checks that access to port 22 is available.")]),e._v(" "),s("h2",{attrs:{id:"finish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish","aria-hidden":"true"}},[e._v("#")]),e._v(" Finish")]),e._v(" "),s("p",[e._v("A number of tasks are performed at the end to ensure that the cluster has been successfully deployed:")]),e._v(" "),s("ul",[s("li",[e._v("Wait until the OpenShift installer reports that bootstrap is complete")]),e._v(" "),s("li",[e._v("Approve any pending CSRs")]),e._v(" "),s("li",[e._v("Wait for the image registry to be ready and configure persistent volumes for the NFS server hosting the registry")]),e._v(" "),s("li",[e._v("Verify that all the cluster operators are available")]),e._v(" "),s("li",[e._v("Wait for the installation to complete")])])])}),[],!1,null,null,null);t.default=r.exports}}]);