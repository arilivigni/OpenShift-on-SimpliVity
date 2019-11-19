(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{214:function(e,o,t){"use strict";t.r(o);var a=t(0),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"deploying-rhel-worker-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhel-worker-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying RHEL worker nodes")]),e._v(" "),t("p",[e._v("Red Hat Enterprise Linux (RHEL) worker nodes can only be deployed after the OpenShift control plane has been\nsuccessfully deployed and once the OCP cluster is up and running.")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("If you choose to use RHEL compute machines in your cluster, you take responsibility for all operating system life cycle management and maintenance, including performing system updates, applying patches, and completing all other required tasks.")])]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("Only RHEL 7.6 is supported in OpenShift Container Platform 4.1. You must not upgrade your compute machines to RHEL 8.")])]),e._v(" "),t("h2",{attrs:{id:"system-requirements-for-rhel-compute-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements-for-rhel-compute-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" System requirements for RHEL compute nodes")]),e._v(" "),t("p",[e._v("RHEL compute nodes in your OpenShift Container Platform environment must meet the following minimum hardware specifications and system-level requirements.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("You must have active "),t("code",[e._v("OpenShift Container Platform")]),e._v(" and "),t("code",[e._v("Red Hat Enterprise Linux Server")]),e._v(" subscriptions associated with your Red Hat Network account.")])]),e._v(" "),t("li",[t("p",[e._v("Production environments must provide compute resources to support your expected application workloads. As an OpenShift Container Platform cluster administrator, you must calculate the resource requirements for your expected workload and add about 10 percent for overhead. For production environments, be sure to allocate enough resources so that your OCP cluster can survive a node failure event without affecting your running applications.")])])]),e._v(" "),t("h2",{attrs:{id:"running-the-playbooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the playbooks")]),e._v(" "),t("p",[e._v("There are a number of steps for deploying RHEL worker nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Download Red Hat Ansible playbooks to the folder "),t("code",[e._v("~/openshift-ansible")]),e._v(" folder")]),e._v(" "),t("li",[e._v("Run the HPE playbook "),t("code",[e._v("playbooks/scale.yml")]),e._v(" in the "),t("code",[e._v("~/Openshift-on-SimpliVity")]),e._v(" to provision the RHEL VMs")]),e._v(" "),t("li",[e._v("Run a Red Hat Ansible playbook to add the RHEL nodes to the OCP cluster.")])]),e._v(" "),t("h3",{attrs:{id:"download-red-hat-ansible-playbooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-red-hat-ansible-playbooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Download Red Hat Ansible playbooks")]),e._v(" "),t("p",[e._v("The Red Hat OpenShift ansible playbooks are available at "),t("a",{attrs:{href:"https://github.com/openshift/openshift-ansible",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/openshift/openshift-ansible"),t("OutboundLink")],1),e._v(". For OpenShift 4.x, this repository only provides playbooks necessary for scaling up or upgrading RHEL hosts in an existing 4.x cluster.")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("The required  Red Hat "),t("code",[e._v("openshift-ansible")]),e._v(" playbooks change regularly. HPE has no control on these playbooks and therefore recommends that you use a specific version of the playbooks rather than the latest version  on the master branch. At the time of  writing, the "),t("code",[e._v("4.1.11-201908060314")]),e._v(" version of the Red Hat "),t("code",[e._v("openshift-ansible")]),e._v(" playbooks  have been tested and certified with this solution.")])]),e._v(" "),t("p",[e._v("Clone the "),t("code",[e._v("4.1.11-201908060314")]),e._v(" branch of the "),t("code",[e._v("openshift-ansible")]),e._v(" playbooks into the home directory of the "),t("code",[e._v("core")]),e._v(" user on\nthe Ansible controller node:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd\n$ git clone --branch openshift-ansible-4.1.11-201908060314 https://github.com/openshift/openshift-ansible.git\n")])])]),t("p",[e._v("Ensure that the "),t("code",[e._v("ocp_repo_directory")]),e._v(" variable in "),t("code",[e._v("group_vars/all/vars.yml")]),e._v(" accurately reflects the location of the cloned\n"),t("code",[e._v("openshift-ansible")]),e._v(" playbooks. By default, this parameter is set to: "),t("code",[e._v("<<local_home>>/openshift-ansible")]),e._v(" so it should not\nrequire modification if the playbooks were cloned in the "),t("code",[e._v("core")]),e._v(" user's home directory.")]),e._v(" "),t("h3",{attrs:{id:"running-playbooks-scale-yml-to-provision-the-rhel-vms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-playbooks-scale-yml-to-provision-the-rhel-vms","aria-hidden":"true"}},[e._v("#")]),e._v(" Running playbooks/scale.yml to provision the RHEL VMs")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Modify your "),t("code",[e._v("hosts")]),e._v(" inventory file to add one or more entries in  the "),t("code",[e._v("[rhel_worker]")]),e._v(" group. For example, in the extract from the  "),t("code",[e._v("hosts")]),e._v(" file below,  the "),t("code",[e._v("ocp-worker4")]),e._v(" node will be added as a RHEL worker:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213 \nocp-worker1   ansible_host=10.15.155.214\nocp-worker2   ansible_host=10.15.155.215 \nocp-worker3   ansible_host=10.15.155.216 \n\n[rhel_worker]\nocp-worker4   ansible_host=10.15.155.217\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Ensure that the value of the "),t("code",[e._v("template")]),e._v(" variable in the group variables file "),t("code",[e._v("group_vars/rhel_worker.yml")]),e._v(" is set to the name of your RHEL 7.6 template. Alternatively, set the "),t("code",[e._v("ova_path")]),e._v(" variable in the same group file to the location of your RHEL 7.6 OVA file. The "),t("code",[e._v("template")]),e._v(" variable will take precedence over the "),t("code",[e._v("ova_path")]),e._v(" variable if both are present.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("template: ocp-rhel760              # Override the default template\nova_path: ~/kits/ocp-rhel760.ova    # Name of the OVA used to import the template\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the playbooks/scale.yml file")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n$ ansible-playbook -i hosts playbooks/scale.yml --vault-password-file .vault_pass\n")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" Running this playbook will generate an inventory file called "),t("code",[e._v("inventory.scale")]),e._v(" in the  "),t("code",[e._v("~/openshift-ansible")]),e._v(" folder, so that folder must be present before running the "),t("code",[e._v("playbooks/scale.yml")]),e._v(" playbook.")]),e._v(" "),t("h3",{attrs:{id:"run-the-red-hat-ansible-playbook-scaleup-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-red-hat-ansible-playbook-scaleup-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" Run the Red Hat Ansible playbook "),t("code",[e._v("scaleup.yml")])]),e._v(" "),t("p",[e._v("Deploy the RHEL worker node(s) by invoking the "),t("code",[e._v("playbooks/scaleup.yml")]),e._v(" playbook in the "),t("code",[e._v("openshift-ansible")]),e._v(" directory:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~/openshift-ansible\n$ ansible-playbook -i inventory.scale playbooks/scaleup.yml\n")])])]),t("p",[e._v("Verify that the newly created RHEL worker node "),t("code",[e._v("ocp-worker4")]),e._v(" has joined the cluster:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get nodes -o wide\n\nNAME          STATUS   ROLES    AGE    VERSION             INTERNAL-IP     EXTERNAL-IP     OS-IMAGE                                                   KERNEL-VERSION               CONTAINER-RUNTIME\nocp-master0   Ready    master   10d    v1.13.4+9252851b0   10.15.155.210   10.15.155.210   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-master1   Ready    master   10d    v1.13.4+9252851b0   10.15.155.211   10.15.155.211   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-master2   Ready    master   10d    v1.13.4+9252851b0   10.15.155.212   10.15.155.212   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-worker0   Ready    worker   10d    v1.13.4+9252851b0   10.15.155.213   10.15.155.213   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-worker1   Ready    worker   10d    v1.13.4+9252851b0   10.15.155.214   10.15.155.214   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-worker2   Ready    worker   8d     v1.13.4+9252851b0   10.15.155.215   10.15.155.215   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-worker3   Ready    worker   8d     v1.13.4+9252851b0   10.15.155.216   10.15.155.216   Red Hat Enterprise Linux CoreOS 410.8.20190612.0 (Ootpa)   4.18.0-80.1.2.el8_0.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el8\nocp-worker4   Ready    worker   7d3h   v1.13.4+509f0153f   10.15.155.217   10.15.155.217   OpenShift Enterprise                                       3.10.0-957.21.3.el7.x86_64   cri-o://1.13.9-1.rhaos4.1.gitd70609a.el7\n\n")])])]),t("p",[t("strong",[e._v("Note:")]),e._v(" It can take 10 to 15 minutes to deploy two Red Hat Enterprise Linux worker nodes.")])])}),[],!1,null,null,null);o.default=r.exports}}]);