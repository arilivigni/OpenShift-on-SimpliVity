(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{229:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"load-balancer-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Load balancer configuration")]),e._v(" "),a("p",[e._v("The solution supports a number of load balancer configuration options:")]),e._v(" "),a("ul",[a("li",[e._v("Use the playbooks to configure two load balancers, for highly available, production deployments.")]),e._v(" "),a("li",[e._v("Use the playbooks to configure a single load balancer, useful for proof of concept deployments.")]),e._v(" "),a("li",[e._v("Deploy the solution using your own load balancers.")])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),a("p",[e._v("A sample configuration for deploying two load balancers is shown below. This extract from the Ansible "),a("code",[e._v("hosts")]),e._v("\ninventory file shows the entries defining the nodes used for the load balancers:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[loadbalancer]\nocp-lb1 ansible_host=10.15.155.7 frontend_ipaddr=10.15.156.40/24 api_int_preferred=\nocp-lb2 ansible_host=10.15.155.8 frontend_ipaddr=10.15.156.41/24 api_preferred=\n")])])]),a("p",[e._v("This extract from the configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" shows the networking configuration required for\nthe two load balancer scenario:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frontend_vm_portgroup: 'extVLAN2968'\nfrontend_gateway: '10.15.156.1''\n\nloadbalancers:\n  apps:\n    vip: 10.15.156.42/24\n  backend:\n    vip: 10.15.155.9/24\n    interface: ens192\n    vrrp_router_id: 54\n  frontend:\n    vip: 10.15.156.42/24\n    interface: ens224\n    vrrp_router_id: 54\n")])])]),a("p",[e._v("This configuration will be expanded on in the following sections.")]),e._v(" "),a("h2",{attrs:{id:"deploying-two-load-balancers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-two-load-balancers","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying two load balancers")]),e._v(" "),a("p",[e._v("With this option, two load balancers are deployed in an active-active configuration to provide highly-available access.\nThese nodes run "),a("code",[e._v("keepalived")]),e._v(" and "),a("code",[e._v("HAproxy")]),e._v(". The load balancers are hosted on two VMs that are prevented from running on\nthe same ESXi host through the use the following anti-affinity rule:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{{cluster_name}}-loadbalancer-anti-affinity-rule-001\n")])])]),a("p",[e._v("where "),a("code",[e._v("cluster_name")]),e._v(" is defined in the configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(".")]),e._v(" "),a("p",[e._v("Two virtual machines are configured in the "),a("code",[e._v("hosts")]),e._v(" inventory file, with each VM connected to an external (frontend)\nnetwork and an internal (backend) network. To achieve this, each load balancer must have two IP addresses specified,\none on the internal network using the "),a("code",[e._v("ansible_host")]),e._v(" variable and a second address on the external network using\n"),a("code",[e._v("frontend_ipaddr")]),e._v(". The latter should be specified in CIDR notation (for example "),a("code",[e._v("10.10.174.165/22")]),e._v(").\nThe internal network is determined by the "),a("code",[e._v("vm_portgroup")]),e._v(" variable in your configuration file, while the external\nnetwork is set using the "),a("code",[e._v("frontend_vm_portgroup")]),e._v(" variable.")]),e._v(" "),a("p",[e._v("You configure one of the VMs as the preferred VM for hosting the internal VIP for the OCP API, by adding\n"),a("code",[e._v("api_int_preferred=")]),e._v(" to the definition. Similarly, you configure the other VM as the preferred VM for hosting\nthe external VIP for the OCP API by adding "),a("code",[e._v("api_preferred=")]),e._v(" to the entry. Note that the "),a("code",[e._v("=")]),e._v(" sign is required\nfor both settings. A sample "),a("code",[e._v("[loadbalancer]")]),e._v(" group is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[loadbalancer]\nocp-lb1 ansible_host=10.15.155.7 frontend_ipaddr=10.15.156.40/24 api_int_preferred=\nocp-lb2 ansible_host=10.15.155.8 frontend_ipaddr=10.15.156.41/24 api_preferred=\n")])])]),a("p",[e._v("The following variables must also be declared in your configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(". The frontend\nnetwork must be defined, similar to the example below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frontend_vm_portgroup: 'extVLAN2968' # Name of the portgroup / external network\nfrontend_gateway: '10.15.156.1'      # gateway for the external network\n")])])]),a("p",[e._v("The "),a("code",[e._v("loadbalancers")]),e._v(" variable in your configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" is used to define the networking\nconfiguration. A virtual IP (VIP) is specified for external access to applications, and for external (frontend) and\ninternal (backend) access to the OCP API. A sample "),a("code",[e._v("loadbalancers")]),e._v(" definition is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("loadbalancers:\n  apps:\n    vip: 10.15.156.9/24\n  backend:\n    vip: 10.15.155.9/24\n    interface: ens192\n    vrrp_router_id: 51\n  frontend:\n    vip: 10.15.156.9/24\n    interface: ens224\n    vrrp_router_id: 51\n")])])]),a("p",[e._v("The names of the interfaces are OS-dependent and depend on how the VMs are built. Using the playbooks from the\n"),a("code",[e._v("OpenShift-on-SimpliVity")]),e._v(" repository with Red Hat Enterprise 7.6, the values of "),a("code",[e._v("ens192")]),e._v(" (backend) and "),a("code",[e._v("ens224")]),e._v("\n(frontend) should be appropriate.  The "),a("code",[e._v("vrrp_router_id")]),e._v(" is used to differentiate between multiple deployments\non the same networking infrastructure, for example, in proof of concepts. If you have multiple deployments, ensure that\neach deployment uses unique VRRP router IDs.")]),e._v(" "),a("h2",{attrs:{id:"deploying-one-load-balancer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-one-load-balancer","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying one load balancer")]),e._v(" "),a("p",[e._v("If you do not require high availability, you can deploy a single load balancer to reduce complexity and resource\nrequirements. In this instance, you only specify a single entry in the "),a("code",[e._v("[loadbalancer]")]),e._v(" group in your "),a("code",[e._v("hosts")]),e._v(" file.\nThe load balancer must have two IP addresses specified, one on the internal network using the "),a("code",[e._v("ansible_host")]),e._v(" variable and\na second address on the external network using "),a("code",[e._v("frontend_ipaddr")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[loadbalancer]\nocp-lb1 ansible_host=10.15.155.7 frontend_ipaddr=10.15.156.7/24\n")])])]),a("p",[e._v("The frontend network must be defined in your configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(", similar to the example below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frontend_vm_portgroup: 'extVLAN2968' # Name of the portgroup / external network\nfrontend_gateway: '10.15.156.1'      # gateway for the external network\n")])])]),a("p",[e._v("The definition for the "),a("code",[e._v("loadbalancers")]),e._v(" variable is now simplified. No virtual IPs need to be specified. Instead, the two\nIP addresses of the load balancer VM are now used. From the example "),a("code",[e._v("hosts")]),e._v(" file, "),a("code",[e._v("10.15.155.7")]),e._v(" is used for internal\naccess to the OCP API (from "),a("code",[e._v("ansible_host=10.15.155.7")]),e._v(") while "),a("code",[e._v("10.15.156.7")]),e._v(" is used for external access (from\n"),a("code",[e._v("frontend_ipaddr=10.15.156.7")]),e._v(").")]),e._v(" "),a("p",[e._v("A sample "),a("code",[e._v("loadbalancers")]),e._v(" definition is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("loadbalancers:\n  apps:\n  backend:\n    interface: ens192\n  frontend:\n    interface: ens224\n")])])]),a("p",[e._v("Once again, the names of the interfaces are OS-dependent and depend on how the VMs are built.\nUsing the playbooks from the "),a("code",[e._v("OpenShift-on-SimpliVity")]),e._v(" repository with Red Hat Enterprise 7.6, the\nvalues of "),a("code",[e._v("ens192")]),e._v(" (backend) and "),a("code",[e._v("ens224")]),e._v(" (frontend) should be appropriate.  The "),a("code",[e._v("vrrp_router_id")]),e._v(" variable\nis no longer needed in this instance.")]),e._v(" "),a("h2",{attrs:{id:"using-your-own-load-balancers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-your-own-load-balancers","aria-hidden":"true"}},[e._v("#")]),e._v(" Using your own load balancers")]),e._v(" "),a("p",[e._v("To use your own load balancers, you should delete any entries in the "),a("code",[e._v("[loadbalancer]")]),e._v(" group in your "),a("code",[e._v("hosts")]),e._v(" file.\nNote that you must still include the "),a("code",[e._v("[loadbalancer]")]),e._v(" group in the file. Your load balancers should be configured\nto meet the requirements as specified in the OpenShift installation documentation\nat "),a("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/installing/installing_vsphere/installing-vsphere.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.1/installing/installing_vsphere/installing-vsphere.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The frontend network must be defined in your configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(", similar to the example below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frontend_vm_portgroup: 'extVLAN2968' # Name of the portgroup / external network\nfrontend_gateway: '10.15.156.1'      # gateway for the external network\n")])])]),a("p",[e._v("The definition for the "),a("code",[e._v("loadbalancers")]),e._v(" variable is again simplified but this time you just specify the virtual IPs\nto be used. A sample "),a("code",[e._v("loadbalancers")]),e._v(" definition is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("loadbalancers:\n  apps:\n    vip: 10.15.156.9/24\n  backend:\n    vip: 10.15.155.9/24\n  frontend:\n    vip: 10.15.156.9/24\n")])])]),a("h2",{attrs:{id:"load-balancer-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Load balancer variables")]),e._v(" "),a("p",[e._v("The following table contains definitions for all the variables used when configuring your load balancers.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("frontend_vm_portgroup")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the portgroup connected to the access/public network")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("frontend_gateway")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Access network gateway")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("A dictionary containing entries for "),a("code",[e._v("apps")]),e._v(", "),a("code",[e._v("backend")]),e._v(" and "),a("code",[e._v("frontend")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.apps")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("A dictionary containing entries specific to "),a("code",[e._v("apps")]),e._v(" access")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.apps.vip")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("If ommited, defaults to the internal IP address of the first load balancer (ie no VIP, no HA)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.backend")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("A dictionary containing entries specific to "),a("code",[e._v("backend")]),e._v(" access")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.backend.vip")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("If ommited, defaults to the internal IP address of the first load balancer (ie no VIP, no HA)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.backend.interface")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the internal (backend) interface. For example, "),a("code",[e._v("ens192")]),e._v(" if using RHEL 7.6 with these playbooks")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.backend.vrrp_router_id")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("If you are deploying multiple clusters in the same environment, it is important to keep them separated using distinct VRRP IDs")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.frontend")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("A dictionary containing entries specific to "),a("code",[e._v("frontend")]),e._v(" access")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.frontend.vip")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("If omitted, defaults to the external IP address of the first load balancer (i.e. no VIP, no HA)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.frontend.interface")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the external (frontend) interface. For example, "),a("code",[e._v("ens224")]),e._v(" if using RHEL 7.6 with these playbooks")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("loadbalancers.frontend.vrrp_router_id")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("If you are deploying multiple clusters in the same environment, it is important to keep them separated using distinct VRRP IDs")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);