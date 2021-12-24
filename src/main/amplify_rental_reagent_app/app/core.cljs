(ns amplify-rental-reagent-app.app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ["/aws-exports" :default ^js aws-exports]
            ["aws-amplify" :refer [Amplify] :as amplify]
            ["@aws-amplify/ui-react" :refer [AmplifyProvider]]
            ["/ui-components/CardACollection.js" :default CardACollection]))

;; (def functional-compiler (r/create-compiler {:function-components true}))
;; (r/set-default-compiler! functional-compiler)

(defn app []
  [:h1 "Create Reagent App"]
  [:> AmplifyProvider
   [:> CardACollection]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (js/console.log "main top")
  (-> Amplify (.configure aws-exports))
  (render))

(defn ^:dev/after-load reload! []
  (render))

;; ALL["models"] = require("/src/gen/models");
