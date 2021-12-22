(ns amplify-rental-reagent-app.app.core
  (:require [reagent.dom :as rdom]
            ;; ["/aws-exports" :default ^js aws-exports]
            ;; ["aws-amplify" :default Amplify]
            ;; ["@aws-amplify/ui-react" :default AmplifyProvider]
            ;; ["../../ui-components" :refer [CardACollection]]
            ))

(defn app []
  [:h1 "Create Reagent App"]
  ;; [:> AmplifyProvider
  ;;  [:> CardACollection]]
  )

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  ;; (-> Amplify (.configure aws-exports))
  (render))

(defn ^:dev/after-load reload! []
  (render))
