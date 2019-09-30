(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{213:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"solution-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Solution configuration")]),t._v(" "),a("p",[t._v("The playbooks creates VMs according to the following sizing.")]),t._v(" "),a("h2",{attrs:{id:"bootstrap-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-node","aria-hidden":"true"}},[t._v("#")]),t._v(" Bootstrap node")]),t._v(" "),a("p",[t._v("A single bootstrap node is required to assist in the deployment. You can delete the bootstrap VM after the cluster has been successfully deployed.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Bootstrap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4x CPU"),a("br"),t._v("16GB RAM"),a("br"),t._v("120GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])])])]),t._v(" "),a("h2",{attrs:{id:"infrastructure-and-supporting-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-and-supporting-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" Infrastructure and supporting nodes")]),t._v(" "),a("p",[t._v("Two infrastructure nodes are deployed by default, providing DHCP and DNS services for the cluster. Two load balancer VMs and an NFS VM are also configured.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Infrastructure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x CPU"),a("br"),t._v("4GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Providing DHCP and DNS services on the internal VLAN. You can configure one (no HA)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Load balancers")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x CPU"),a("br"),t._v("4GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Two loadbalancers are deployed by default. You can configure one (no HA) or 0 where you use your own existing load balancers")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NFS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RHEL 7.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x CPU"),a("br"),t._v("4GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Required for persistent strorage for the OpenShift Registry")])])])]),t._v(" "),a("h2",{attrs:{id:"ocp-cluster-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocp-cluster-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" OCP cluster nodes")]),t._v(" "),a("p",[t._v("By default, 3 master nodes are deployed for high availability. A minimum of 2 worker nodes are required.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Masters")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4x CPU"),a("br"),t._v("16GB RAM"),a("br"),t._v("120GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Workers")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CoreOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x CPU"),a("br"),t._v("16GB RAM"),a("br"),t._v("120GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("This is the RH minimum requirement")])])])]),t._v(" "),a("p",[t._v("Similar sizing requirements will apply for any worker nodes (CoreOS or RHEL) you add to the cluster after the\ninitial deployment.")])])}),[],!1,null,null,null);e.default=l.exports}}]);