(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(e,t,s){e.exports=s.p+"assets/img/cluster-health.b50d2961.png"},224:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"recovering-from-lost-master-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recovering-from-lost-master-hosts","aria-hidden":"true"}},[e._v("#")]),e._v(" Recovering from lost master hosts")]),e._v(" "),a("p",[e._v("It is possible to use the etcd backup to recover from the scenario where one or more master nodes have been lost. This includes situations where a majority of master hosts have been lost, leading to etcd quorum loss and the cluster going offline. The following procedure assumes that you have at least one healthy master host.")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[e._v("This procedure can be used to validate that your etcd backup has succeeded, but it is highly invasive in that it\nrequires you to destroy master nodes and would render your cluster unusable for the duration of the procedure.")])]),e._v(" "),a("p",[e._v("The information in this section is taken from "),a("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/backup_and_restore/disaster_recovery/scenario-1-infra-recovery.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.1/backup_and_restore/disaster_recovery/scenario-1-infra-recovery.html"),a("OutboundLink")],1),e._v(". Please check the latest version of the OpenShift documentation for any updates to this procedure.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Ensure  that you can access the first master node "),a("code",[e._v("ocp-master0")]),e._v(" using "),a("code",[e._v("ssh")])])]),e._v(" "),a("li",[a("p",[e._v("Ensure that you have taken a backup, as outlined in the preceding section")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ls -al  ~/backups/\n\n-rw-rw-r--.  1 core core   625040 Sep 22 09:18 backup_2019_09_22_131749.misc.tgz\n-rw-rw-r--.  1 core core 21732338 Sep 22 09:18 backup_2019_09_22_131749.snapshots.tgz\n")])])])])]),e._v(" "),a("p",[e._v("Unpack the snapshots:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/backups\n$ tar -xvf backup_2019_09_22_131749.snapshots.tgz\n\nocp-master1/\nocp-master0/\nocp-master2/\nocp-master1/assets/\nocp-master1/assets/backup/\nocp-master1/assets/backup/snapshot.db\nocp-master1/assets/backup/etcd-member.yaml\nocp-master1/assets/backup/etcd-client.key\nocp-master1/assets/backup/etcd-client.crt\nocp-master1/assets/backup/etcd-ca-bundle.crt\nocp-master0/assets/\nocp-master0/assets/backup/\nocp-master0/assets/backup/snapshot.db\nocp-master0/assets/backup/etcd-member.yaml\nocp-master0/assets/backup/etcd-client.key\nocp-master0/assets/backup/etcd-client.crt\nocp-master0/assets/backup/etcd-ca-bundle.crt\nocp-master2/assets/\nocp-master2/assets/backup/\nocp-master2/assets/backup/snapshot.db\nocp-master2/assets/backup/etcd-member.yaml\nocp-master2/assets/backup/etcd-client.key\nocp-master2/assets/backup/etcd-client.crt\nocp-master2/assets/backup/etcd-ca-bundle.crt\n")])])]),a("h2",{attrs:{id:"loss-of-two-master-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loss-of-two-master-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Loss of two master nodes")]),e._v(" "),a("p",[e._v("If you lose (or purposely delete) two master nodes, etcd quorum will be lost and this will lead to the cluster going offline. If you the try to run "),a("code",[e._v("oc")]),e._v(" commands, they will not respond:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc get nodes\n")])])]),a("p",[e._v("If you view the cluster health in the web console, you will see that the control plane status is unknown.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(203),alt:'"Cluster health"',title:"Figure. Cluster health"}})]),e._v(" "),a("p",[a("strong",[e._v("Figure. Cluster health")])]),e._v(" "),a("h2",{attrs:{id:"restore-etcd-quorum-on-the-remaining-master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-etcd-quorum-on-the-remaining-master","aria-hidden":"true"}},[e._v("#")]),e._v(" Restore etcd quorum on the remaining master")]),e._v(" "),a("p",[e._v("Copy a snapshot from the backup to the remaining master:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ scp ~/backups/ocp-master0/assets/backup/snapshot.db core@ocp-master0:~/\n")])])]),a("p",[e._v("Connect to the remaining master "),a("code",[e._v("ocp-master0")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ssh  ocp-master0\n\nWarning: Permanently added 'ocp-master0,10.15.155.210' (ECDSA) to the list of known hosts.\nRed Hat Enterprise Linux CoreOS 410.8.20190830.0\nWARNING: Direct SSH access to machines is not recommended.\n\n---\nLast login: Sun Sep 22 13:18:33 2019 from 10.15.155.7\n[core@ocp-master0 ~]$\n\n")])])]),a("p",[e._v("Set the "),a("code",[e._v("INITIAL_CLUSTER")]),e._v(" variable to the single remaining member, in the format of "),a("code",[e._v("<name>=<url>")]),e._v(". First,\nyou need to determine the "),a("code",[e._v("name")]),e._v(" and "),a("code",[e._v("url")]),e._v(" to use:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ETCDCTL=/var/home/core/assets/bin/etcdctl\n$ ASSET_DIR=/home/core/assets/\n$ sudo ETCDCTL_API=3 ${ETCDCTL} --cert $ASSET_DIR/backup/etcd-client.crt --key $ASSET_DIR/backup/etcd-client.key --cacert $ASSET_DIR/backup/etcd-ca-bundle.crt member list\n\n1daf5dbed09ea2d3, started, etcd-member-ocp-master2, https://etcd-2.ocp.hpecloud.org:2380, https://10.15.155.212:2379\n333583b05ff2cf8a, started, etcd-member-ocp-master0, https://etcd-0.ocp.hpecloud.org:2380, https://10.15.155.210:2379\n4be0034d015274a2, started, etcd-member-ocp-master1, https://etcd-1.ocp.hpecloud.org:2380, https://10.15.155.211:2379\n")])])]),a("p",[e._v("Now, set the "),a("code",[e._v("INITIAL_CLUSTER")]),e._v(" environment variable using the information gathered for "),a("code",[e._v("ocp-master0")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ export INITIAL_CLUSTER="etcd-member-ocp-master0.ocp.hpecloud.org=https://etcd-0.ocp.hpecloud.org:2380"\n')])])]),a("p",[e._v("Run the "),a("code",[e._v("etcd-snapshot-restore.sh")]),e._v(" script, using the copied snapshot and the member list, in this case, just the "),a("code",[e._v("ocp-master0")]),e._v(" member:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo /usr/local/bin/etcd-snapshot-restore.sh /home/core/snapshot.db $INITIAL_CLUSTER\n\n\nDownloading etcdctl binary..\netcdctl version: 3.3.10\nAPI version: 3.3\netcd-member.yaml found in ./assets/backup/\nStopping all static pods..\n..stopping etcd-member.yaml\n..stopping kube-scheduler-pod.yaml\n..stopping kube-controller-manager-pod.yaml\n..stopping kube-apiserver-pod.yaml\nStopping etcd..\nWaiting for etcd-member to stop\nStopping kubelet..\nStopping all containers..\n019708c6aff244dbc47f90cec65c4823a93b8e3fe731f3a5e8f3cdedb0dc37ed\n81eed61df3ee87bd960602f23e598ab48b43a6cb5610f4ecfed709f1e1b67119\n...\nBacking up etcd data-dir..\nRemoving etcd data-dir /var/lib/etcd\nRestoring etcd member etcd-member-ocp-master0.ocp.hpecloud.org from snapshot..\n2019-09-22 14:18:21.903011 I | pkg/netutil: resolving etcd-0.ocp.hpecloud.org:2380 to 10.15.155.210:2380\n2019-09-22 14:18:22.154363 I | mvcc: restore compact to 713621\n2019-09-22 14:18:22.207764 I | etcdserver/membership: added member 1c5a549c9f4e67b5 [https://etcd-0.ocp.hpecloud.org:2380] to cluster 11eeb64feb9a2071\nStarting static pods..\n..starting etcd-member.yaml\n..starting kube-scheduler-pod.yaml\n..starting kube-controller-manager-pod.yaml\n..starting kube-apiserver-pod.yaml\nStarting kubelet..\n")])])]),a("p",[e._v("On your Ansible controller node, check the nodes in your cluster:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc get nodes\n\nNAME          STATUS     ROLES    AGE   VERSION\nocp-master0   Ready      master   45h   v1.13.4+3bd346709\nocp-master1   NotReady   master   45h   v1.13.4+3bd346709\nocp-master2   NotReady   master   45h   v1.13.4+3bd346709\nocp-worker0   Ready      worker   45h   v1.13.4+3bd346709\nocp-worker1   Ready      worker   45h   v1.13.4+3bd346709\n")])])]),a("p",[e._v("You need to explicitly delete the "),a("code",[e._v("NotReady")]),e._v(" nodes "),a("code",[e._v("ocp-master1")]),e._v(" and "),a("code",[e._v("ocp-master2")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc delete node ocp-master1\n$ oc delete node ocp-master2\n\n$ oc get nodes\n\nNAME          STATUS   ROLES    AGE   VERSION\nocp-master0   Ready    master   45h   v1.13.4+3bd346709\nocp-worker0   Ready    worker   45h   v1.13.4+3bd346709\nocp-worker1   Ready    worker   45h   v1.13.4+3bd346709\n")])])]),a("h2",{attrs:{id:"redeploy-the-two-master-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redeploy-the-two-master-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Redeploy the two master nodes")]),e._v(" "),a("p",[e._v("You need to re-build the nodes for "),a("code",[e._v("ocp-master1")]),e._v(" and "),a("code",[e._v("ocp-master2")]),e._v(". You must ensure that your "),a("code",[e._v("/etc/hosts")]),e._v(", DNS, and load balancers are modified appropriately.")]),e._v(" "),a("h2",{attrs:{id:"grow-etcd-to-full-membership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grow-etcd-to-full-membership","aria-hidden":"true"}},[e._v("#")]),e._v(" Grow etcd to full membership.")]),e._v(" "),a("p",[e._v("Set up a temporary etcd certificate signer service on your master node that is an etcd member, in this case, "),a("code",[e._v("ocp-master0")]),e._v(". Connect to the master node and then log in to your cluster as a "),a("code",[e._v("cluster-admin")]),e._v(" user using the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc login https://localhost:6443\n\nThe server uses a certificate signed by an unknown authority.\nYou can bypass the certificate check, but any data you send to the server could be intercepted by others.\nUse insecure connections? (y/n): y\n\nAuthentication required for https://localhost:6443 (openshift)\nUsername: kubeadmin\nPassword:  LX65K-DXmpC-P4Hpo-W35au\nLogin successful.\n")])])]),a("p",[e._v("Obtain the pull specification for the "),a("code",[e._v("kube-etcd-signer-server")]),e._v(" image:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ export KUBE_ETCD_SIGNER_SERVER=$(sudo oc adm release info --image-for kube-etcd-signer-server --registry-config=/var/lib/kubelet/config.json --config=/home/core/.kube/config)\n")])])]),a("p",[e._v("Run the "),a("code",[e._v("tokenize-signer.sh")]),e._v(" script to generate the required files:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo -E /usr/local/bin/tokenize-signer.sh ocp-master0.ocp.hpecloud.org\n\nPopulating template /usr/local/share/openshift-recovery/template/kube-etcd-cert-signer.yaml.template\nPopulating template ./assets/tmp/kube-etcd-cert-signer.yaml.stage1\nTokenized template now ready: ./assets/manifests/kube-etcd-cert-signer.yaml\n")])])]),a("p",[e._v("Use the generated "),a("code",[e._v("kube-etcd-cert-signer.yaml")]),e._v(" file to deploy the signer pod:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc create -f assets/manifests/kube-etcd-cert-signer.yaml\n\npod/etcd-signer created\n")])])]),a("p",[e._v("Verify that the signer is listening on this master node - it may take a minute or two to start.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ss -ltn | grep 9943\n$ ss -ltn | grep 9943\n\nLISTEN   0         128                       *:9943                   *:*\n")])])]),a("h2",{attrs:{id:"add-the-restored-master-hosts-to-the-etcd-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-the-restored-master-hosts-to-the-etcd-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Add the restored master hosts to the etcd cluster")]),e._v(" "),a("p",[e._v("Connect to one of the restored master nodes, in this case, "),a("code",[e._v("ocp-master1")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ssh ocp-master1\n")])])]),a("p",[e._v("Log in to your cluster as a cluster-admin user using the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc login https://localhost:6443\n\nThe server uses a certificate signed by an unknown authority.\nYou can bypass the certificate check, but any data you send to the server could be intercepted by others.\nUse insecure connections? (y/n): y\n\nAuthentication required for https://localhost:6443 (openshift)\nUsername: kubeadmin\nPassword:  LX65K-DXmpC-P4Hpo-W35au\nLogin successful.\n\n")])])]),a("p",[e._v("Export two environment variables that are required by the etcd-member-recover.sh script:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ export SETUP_ETCD_ENVIRONMENT=$(sudo oc adm release info --image-for setup-etcd-environment --registry-config=/var/lib/kubelet/config.json  --config=/home/core/.kube/config)\n\n$ export KUBE_CLIENT_AGENT=$(sudo oc adm release info --image-for kube-client-agent --registry-config=/var/lib/kubelet/config.json --config=/home/core/.kube/config)\n")])])]),a("p",[e._v("Run the "),a("code",[e._v("etcd-member-recover.sh")]),e._v(" script, passing in that IP address of "),a("code",[e._v("ocp-master0")]),e._v(" and the name of the new etcd member:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ sudo -E /usr/local/bin/etcd-member-recover.sh 10.15.155.210 etcd-member-ocp-master1.ocp.hpecloud.org\n\nCreating asset directory ./assets\nDownloading etcdctl binary..\netcdctl version: 3.3.10\nAPI version: 3.3\nBacking up /etc/kubernetes/manifests/etcd-member.yaml to ./assets/backup/\nBacking up /etc/etcd/etcd.conf to ./assets/backup/\nTrying to backup etcd client certs..\netcd client certs found in /etc/kubernetes/static-pod-resources/kube-apiserver-pod-8 backing up to ./assets/backup/\nStopping etcd..\nWaiting for etcd-member to stop\nWaiting for etcd-member to stop\nWaiting for etcd-member to stop\nWaiting for etcd-member to stop\nLocal etcd snapshot file not found, backup skipped..\nBacking up etcd certificates..\nPopulating template /usr/local/share/openshift-recovery/template/etcd-generate-certs.yaml.template\nPopulating template ./assets/tmp/etcd-generate-certs.stage1\nPopulating template ./assets/tmp/etcd-generate-certs.stage2\nStarting etcd client cert recovery agent..\nWaiting for certs to generate..\nWaiting for certs to generate..\nWaiting for certs to generate..\nWaiting for certs to generate..\nStopping cert recover..\nWaiting for generate-certs to stop\nPatching etcd-member manifest..\nUpdating etcd membership..\nMember 81d77724154f987e added to cluster 11eeb64feb9a2071\n\nETCD_NAME="etcd-member-ocp-master1.ocp.hpecloud.org"\nETCD_INITIAL_CLUSTER="etcd-member-ocp-master0=https://etcd-0.ocp.hpecloud.org:2380,etcd-member-ocp-master1.ocp.hpecloud.org=https://etcd-1.ocp.hpecloud.org:2380"\nETCD_INITIAL_ADVERTISE_PEER_URLS="https://etcd-1.ocp.hpecloud.org:2380"\nETCD_INITIAL_CLUSTER_STATE="existing"\nStarting etcd..\n')])])]),a("h2",{attrs:{id:"verify-master-host-has-been-added-to-the-etcd-member-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-master-host-has-been-added-to-the-etcd-member-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify master host has been added to the etcd member list")]),e._v(" "),a("p",[e._v("From your Ansible controller node, connect to the first master "),a("code",[e._v("ocp-master1")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# ssh ocp-master0\n")])])]),a("p",[e._v("Connect to the running etcd container:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ id=$(sudo crictl ps --name etcd-member | awk 'FNR==2{ print $1}')\n$ sudo crictl exec -it $id /bin/sh\n\nsh-4.2#\n")])])]),a("p",[e._v("In the etcd container, export variables needed for connecting to etcd:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh-4.2# export ETCDCTL_API=3 \nsh-4.2# export ETCDCTL_CACERT=/etc/ssl/etcd/ca.crt \nsh-4.2# export ETCDCTL_CERT=$(find /etc/ssl/ -name *peer*crt)                   \nsh-4.2# export ETCDCTL_KEY=$(find /etc/ssl/ -name *peer*key)\n")])])]),a("p",[e._v("In the etcd container, execute "),a("code",[e._v("etcdctl member list")]),e._v(" and verify that the new member is listed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh-4.2# etcdctl member list -w table\n+------------------+---------+------------------------------------------+--------------------------------------+                               ----------------------------+\n|        ID        | STATUS  |                   NAME                   |              PEER ADDRS              |                                       CLIENT ADDRS        |\n+------------------+---------+------------------------------------------+--------------------------------------+                               ----------------------------+\n| 1c5a549c9f4e67b5 | started |                  etcd-member-ocp-master0 | https://etcd-0.ocp.hpecloud.org:2380 |                                https://10.15.155.210:2379 |\n| 81d77724154f987e | started | etcd-member-ocp-master1.ocp.hpecloud.org | https://etcd-1.ocp.hpecloud.org:2380 |                                https://10.15.155.211:2379 |\n+------------------+---------+------------------------------------------+--------------------------------------+                               ----------------------------+\nsh-4.2#\n")])])]),a("p",[e._v("Note that it may take up to 10 minutes for the new member to start. Repeat these steps for "),a("code",[e._v("ocp-master2")]),e._v(" until\nyou have achieved full etcd membership.")]),e._v(" "),a("p",[e._v("When you are finished restoring the etcd cluster, delete the signer pod from the OpenShift cluster:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc delete pod -n openshift-config etcd-signer\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);