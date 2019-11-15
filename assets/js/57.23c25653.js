(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{237:function(e,o,r){"use strict";r.r(o);var t=r(0),a=Object(t.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"deploying-coreos-worker-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploying-coreos-worker-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying CoreOS worker nodes")]),e._v(" "),r("p",[e._v("As part of the initial deployment of the OpenShift cluster, two Red Hat Core OS workers are configured by default.\nThese workers are defined in the "),r("code",[e._v("[rhcos_worker]")]),e._v(" group in the "),r("code",[e._v("hosts")]),e._v(" inventory file:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213 \nocp-worker1   ansible_host=10.15.155.214\n")])])]),r("p",[e._v("The sample configuration for the initial cluster is three CoreOS master nodes and two CoreOS worker nodes:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ oc get nodes\n\nNAME          STATUS   ROLES    AGE    VERSION\nocp-master0   Ready    master   2d2h   v1.13.4+9252851b0\nocp-master1   Ready    master   2d2h   v1.13.4+9252851b0\nocp-master2   Ready    master   2d2h   v1.13.4+9252851b0\nocp-worker0   Ready    worker   2d2h   v1.13.4+9252851b0\nocp-worker1   Ready    worker   2d2h   v1.13.4+9252851b0\n")])])]),r("p",[e._v("To deploy additional CoreOS worker nodes, add new entries to the "),r("code",[e._v("[rhcos_worker]")]),e._v(" group, for example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213 \nocp-worker1   ansible_host=10.15.155.214\nocp-worker2   ansible_host=10.15.155.215 \nocp-worker3   ansible_host=10.15.155.216 \n")])])]),r("p",[e._v("Run the Ansible playbook "),r("code",[e._v("playbooks/scale.yml")]),e._v(" to deploy the new CoreOS nodes:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/scale.yml --vault-password-file .vault_pass\n")])])]),r("p",[e._v("The playbook will provision new VMs for the nodes, and these should automatically join the cluster after a few minutes.\nYou can observe the nodes joining the cluster via the "),r("code",[e._v("oc get nodes")]),e._v(" command. Initially, the nodes will report\nas not ready:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ oc get nodes\n\nNAME          STATUS     ROLES    AGE    VERSION\nocp-master0   Ready      master   2d3h   v1.13.4+9252851b0\nocp-master1   Ready      master   2d3h   v1.13.4+9252851b0\nocp-master2   Ready      master   2d3h   v1.13.4+9252851b0\nocp-worker0   Ready      worker   2d3h   v1.13.4+9252851b0\nocp-worker1   Ready      worker   2d3h   v1.13.4+9252851b0\nocp-worker2   NotReady   worker   5s     v1.13.4+9252851b0\nocp-worker3   NotReady   worker   35s    v1.13.4+9252851b0\n")])])]),r("p",[e._v("After a minute or two, the status should change to "),r("code",[e._v("Ready")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ oc get nodes\n\nNAME          STATUS   ROLES    AGE    VERSION\nocp-master0   Ready    master   2d3h   v1.13.4+9252851b0\nocp-master1   Ready    master   2d3h   v1.13.4+9252851b0\nocp-master2   Ready    master   2d3h   v1.13.4+9252851b0\nocp-worker0   Ready    worker   2d3h   v1.13.4+9252851b0\nocp-worker1   Ready    worker   2d3h   v1.13.4+9252851b0\nocp-worker2   Ready    worker   45s    v1.13.4+9252851b0\nocp-worker3   Ready    worker   75s    v1.13.4+9252851b0\n")])])]),r("h2",{attrs:{id:"removing-coreos-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#removing-coreos-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Removing CoreOS nodes")]),e._v(" "),r("p",[e._v("If you want to reduce the number of CoreOS worker nodes (for example, you may have replaced them with RHEL worker nodes),\nyou need to use the following procedure.")]),e._v(" "),r("p",[e._v("For each node that you want to remove, you must:")]),e._v(" "),r("ul",[r("li",[e._v("Mark the node as unschedulable")]),e._v(" "),r("li",[e._v("Drain all the pods from the node")]),e._v(" "),r("li",[e._v("Delete the node")])]),e._v(" "),r("p",[e._v("Finally, remove the nodes from your load balancers and delete the VMs.")]),e._v(" "),r("p",[e._v("For more information on removing CoreOS nodes, see the documentation at "),r("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/machine_management/adding-rhel-compute.html#rhel-compute-requirements_adding-rhel-compute",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.1/machine_management/adding-rhel-compute.html#rhel-compute-requirements_adding-rhel-compute"),r("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=a.exports}}]);